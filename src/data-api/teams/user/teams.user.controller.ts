import { Body, Controller, Param, Post } from '@nestjs/common';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateTeamUserBodyDto } from './dto/create-team.user.body.dto';
import { CreateTeamUserResDto } from './dto/create-team.user.res.dto';
import { InviteUserBodyDto } from './dto/invite-user.user.body.dto';

@Controller(`${API_V1_USER_PATH}/teams`)
export class TeamsUserController {
    @Post()
    createTeam(@Body() body: CreateTeamUserBodyDto) {
        return new CreateTeamUserResDto(body.name, body.description);
    }

    @Post(':id/invites')
    inviteUser(@Param('id') teamId: string, @Body() body: InviteUserBodyDto) {
        // 1. Check if user email exists
        // 2. Check if user is not already in the team
        // 3. Add metadata about who sent the invite
        // 4. Add invite in DB, separate from the app invites
        return { teamId, body };
    }
}
