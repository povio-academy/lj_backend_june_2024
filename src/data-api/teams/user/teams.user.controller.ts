import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateTeamUserBodyDto } from './dto/create-team.user.body.dto';
import { CreateTeamUserResDto } from './dto/create-team.user.res.dto';
import { InviteUserBodyDto } from './dto/invite-user.user.body.dto';
import { UpdateTeamBodyDto } from './dto/update-team.user.body.dto';
import { TeamMemberResDto } from './dto/team-member.res.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InviteTeamResDto } from './dto/invite-team.res.dto';

@ApiTags('Teams')
@Controller(`${API_V1_USER_PATH}/teams`)
export class TeamsUserController {
    @ApiOperation({ summary: 'Create a new team' })
    @Post()
    createTeam(@Body() body: CreateTeamUserBodyDto): CreateTeamUserResDto {
        return new CreateTeamUserResDto(body.name, body.description);
    }

    @ApiOperation({ summary: 'Invite a new user into a team' })
    @Post(':id/invites')
    inviteUser(@Param('id') teamId: string, @Body() body: InviteUserBodyDto) {
        // 1. Check if user email exists
        // 2. Check if user is not already in the team
        // 3. Add metadata about who sent the invite
        // 4. Add invite in DB, separate from the app invites
        return { teamId, body };
    }

    @ApiOperation({ summary: 'Join a team' })
    @Post(':id/join')
    joinTeam(@Param('id') teamId: string) {
        // 1. Get userId from JWT token
        // 2. Check if user is invited into that team
        // 3. Join user in a team, when a user joins a team, he is a normal member
        return teamId;
    }

    @ApiOperation({ summary: 'Update team data' })
    @HttpCode(200)
    @Patch(':id')
    updateTeam(@Param('id') teamId: string, @Body() body: UpdateTeamBodyDto) {
        // 1. Check if user is team admin
        // 2. Update team data
        return { teamId, body };
    }

    @ApiOperation({ summary: 'Leave a team' })
    @HttpCode(200)
    @Patch(':id')
    leaveTeam(@Param('id') teamId: string) {
        // 1. Only normal users can leave a team
        // 2. Set isDeleted to true
        return teamId;
    }

    @ApiOperation({ summary: 'Get all team members' })
    @Get(':id/members')
    getAllMembers(@Param('id') teamId: string): TeamMemberResDto[] {
        // 1. Get userId from JWT token
        // 2. Check if user is in a team with ID: teamId
        // 3. Get all members of team with ID: teamId
        // 4. implement pagination
        console.log(teamId);
        return [
            new TeamMemberResDto(
                'teamMemberID',
                'Oliver',
                'Smith',
                'oliver.smith@gmail.com',
                false,
            ),
        ];
    }

    @Get(':id/members/invites')
    getAllInvites(@Param('id') teamId: string): InviteTeamResDto[] {
        // 1. Check if user is team admin
        // 2. Return only invites with pending status
        console.log(teamId);
        return [
            new InviteTeamResDto(
                'Invite ID',
                'Inviter ID',
                'example@gmail.com',
                false,
                new Date(),
            ),
        ];
    }
}
