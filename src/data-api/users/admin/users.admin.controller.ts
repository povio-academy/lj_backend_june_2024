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
import { UsersAdminResDto } from './dto/users.admin.res.dto';
import { UpdateUserAdminReqDto } from './dto/update.user.admin.req.dto';
import { PagingInfo } from '~data-api/common/dto/paging-info';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';

@Injectable()
@Controller(`${API_V1_ADMIN_PATH}/users`)
@ApiTags('Users')
export class UsersAdminController {
    @ApiOperation({
        summary: 'For an admin to invite future user',
    })
    @Post('/invite')
    @HttpCode(204)
    async invite(@Body() body: InviteReqDto) {}

    @ApiOperation({
        summary: 'Get all users',
    })
    @Get('/users')
    async getUsers(@Query() paging: PagedReqDto): Promise<UsersAdminResDto> {
        //add pagination
        return new UsersAdminResDto();
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
    @ApiOperation({ summary: 'Get all invited users' })
    @Get('/invites')
    async getInvitedUsers(): Promise<UsersAdminResDto> {
        //return users with a UserRole.PENDING
        //add pagination
        return new UsersAdminResDto();
    }
}
