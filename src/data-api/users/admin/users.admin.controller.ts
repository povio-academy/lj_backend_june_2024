import {
    Body,
    Controller,
    Get,
    HttpCode,
    Injectable,
    Param,
    Patch,
    Post,
    Query,
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

@Injectable()
@Controller(`${API_V1_ADMIN_PATH}/users`)
@ApiTags('Users')
export class UsersAdminController {
    constructor(private emailService: EmailService) {}
    @ApiOperation({
        summary: 'For an admin to invite future user',
    })
    @Post('/invite')
    @HttpCode(204)
    async invite(@Body() body: InviteReqDto) {
        console.log(
            await this.emailService.sendAppInviteFromTemplate(body.email),
        );
    }

    @ApiPaginationResponse(UserDto)
    @ApiOperation({
        summary: 'Get all users',
    })
    @Get()
    async getUsers(@Query() paging: PagedReqDto): Promise<PagedResDto> {
        //add pagination
        const users = new UserDto();
        return new PagedResDto(
            [users],
            new PagingMetadataDto({
                total: 1,
                page: paging.page,
                pageSize: paging.pageSize,
            }),
        );
    }
    @ApiOperation({ summary: 'Update/Delete existing users data' })
    @Patch(':id')
    @HttpCode(200)
    async updateUser(
        @Body() body: UpdateUserAdminReqDto,
        @Param('id') userId: string,
    ) {
        //delete and update user data
    }

    @ApiPaginationResponse(UserDto)
    @ApiOperation({ summary: 'Get all invited users' })
    @Get('/invites')
    async getInvitedUsers(@Query() paging: PagedReqDto): Promise<PagedResDto> {
        //return users with a UserRole.PENDING
        //add pagination
        const users = new UserDto();
        return new PagedResDto(
            [users],
            new PagingMetadataDto({
                total: 1,
                page: paging.page,
                pageSize: paging.pageSize,
            }),
        );
    }
}
