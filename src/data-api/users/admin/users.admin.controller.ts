import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    Injectable,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { InviteReqDto } from './dto/invite.req.dto';
import { UpdateUserAdminReqDto } from './dto/update.user.admin.req.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { UserDto } from './dto/user.dto';
import { ApiPaginationResponse } from '~common/decorators/api-pagination.res.decorator';
import { PagingMetadataDto } from '~data-api/common/dto/paging-metadata.dto';
import { EmailService } from '~modules/notification/email/email.service';
import { InviteUserUseCase } from '~modules/user/use-cases/invite-user.use-case';
import { UserRole } from '@prisma/client';
import { UserEntity } from '~modules/user/user.entity';
import { UpdateUserAdminUseCase } from '~modules/user/use-cases/update-user-admin.use-case';
import { JwtGuard } from '~data-api/auth/guards/jwt.guard';
import { Roles } from '~common/decorators/roles.decorator';

@Injectable()
@Controller(`${API_V1_ADMIN_PATH}/users`)
@ApiTags('Users')
export class UsersAdminController {
    constructor(
        private emailService: EmailService,
        private inviteUserUseCase: InviteUserUseCase,
        private updateUserAdminUseCase: UpdateUserAdminUseCase,
    ) {}
    @ApiOperation({
        summary: 'For an admin to invite future user',
    })
    @Post('/invite')
    @HttpCode(204)
    async invite(@Body() body: InviteReqDto) {
        // INVITER ID SHOULD BE TAKEN FROM THE JWT TOKEN
        try {
            await this.inviteUserUseCase.execute('1', body.email);
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    @ApiPaginationResponse(UserDto)
    @ApiOperation({
        summary: 'Get all users',
    })
    @Get()
    //ass promise<pagedResDto>
    async getUsers(@Query() paging: PagedReqDto) {
        //add pagination
        //return all users in PagedResDto
        // return new PagedResDto(
        //     [users],
        //     new PagingMetadataDto({
        //         total: 1,
        //         page: paging.page,
        //         pageSize: paging.pageSize,
        //     }),
        // );
    }

    @Roles(UserRole.ADMIN)
    @UseGuards(JwtGuard)
    @ApiOperation({ summary: 'Update/Delete existing users data' })
    @Patch(':id')
    @HttpCode(200)
    async updateUser(
        @Body() body: UpdateUserAdminReqDto,
        @Param('id') userId: string,
    ): Promise<UserDto> {
        const updateUser = await this.updateUserAdminUseCase.execute(
            userId,
            body,
        );
        return new UserDto(updateUser);
    }

    @ApiPaginationResponse(UserDto)
    @ApiOperation({ summary: 'Get all invited users' })
    @Get('/invites')
    //Add promise<pagedResDto
    async getInvitedUsers(@Query() paging: PagedReqDto) {
        //return users with a UserRole.PENDING
        //add pagination
        //const users = new UserDto();
        // return new PagedResDto(
        //     [users],
        //     new PagingMetadataDto({
        //         total: 1,
        //         page: paging.page,
        //         pageSize: paging.pageSize,
        //     }),
        // );
    }
}
