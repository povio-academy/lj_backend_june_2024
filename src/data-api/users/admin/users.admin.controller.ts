import { Body, Controller, HttpCode, Injectable, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { InviteReqDto } from './dto/invite.req.dto';

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
}
