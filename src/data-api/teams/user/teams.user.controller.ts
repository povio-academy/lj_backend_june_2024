import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateTeamUserBodyDto } from './dto/create-team.user.body.dto';
import { CreateTeamUserResDto } from './dto/create-team.user.res.dto';
import { InviteUserBodyDto } from './dto/invite-user.user.body.dto';
import { UpdateTeamBodyDto } from './dto/update-team.user.body.dto';
import { TeamMemberResDto } from './dto/team-member.user.res.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TeamInviteResDto } from './dto/team-invite.user.res.dto';
import { UpdateTeamMemberBodyDto } from './dto/update-team-member.user.body.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { ApiPaginationResponse } from '~common/decorators/api-pagination.res.decorator';

@ApiTags('Teams')
@Controller(`${API_V1_USER_PATH}/teams`)
export class TeamsUserController {
    @ApiOperation({ summary: 'Create a new team' })
    @Post()
    createTeam(@Body() body: CreateTeamUserBodyDto): CreateTeamUserResDto {
        // 1. Create a new team
        // 2. Team creator automatically become team admin
        return new CreateTeamUserResDto(body.name, body.description);
    }

    @ApiOperation({ summary: 'Invite a new user into a team' })
    @Post(':id/invites')
    inviteUser(
        @Param('id') teamId: string,
        @Body() body: InviteUserBodyDto,
    ): void {
        // 1. Check if user email exists
        // 2. Check if user is not already in the team
        // 3. Add metadata about who sent the invite
        // 4. Add invite in DB, separate from the app invites
        console.log({ teamId, body });
    }

    @ApiOperation({ summary: 'Join a team' })
    @Post(':id/join')
    joinTeam(@Param('id') teamId: string): void {
        // 1. Get userId from JWT token
        // 2. Check if user is invited into that team
        // 3. Join user in a team, when a user joins a team, he is a normal member
        console.log(teamId);
    }

    @ApiOperation({ summary: 'Update team data' })
    @HttpCode(200)
    @Patch(':id')
    updateTeam(
        @Param('id') teamId: string,
        @Body() body: UpdateTeamBodyDto,
    ): void {
        // 1. Check if user is team admin
        // 2. Update team data
        console.log({ teamId, body });
    }

    @ApiOperation({ summary: 'Update a team member' })
    @HttpCode(200)
    @Patch(':teamId/members/:teamMemberId')
    updateTeamMember(
        @Param('teamId') teamId: string,
        @Param('teamMemberId') teamMemberId: string,
        @Body() body: UpdateTeamMemberBodyDto,
    ): void {
        // 1. Check if a user is team admin
        // 2. Update a team member
        console.log(teamId, teamMemberId, body);
    }

    @ApiPaginationResponse(TeamMemberResDto)
    @ApiOperation({ summary: 'Get all team members' })
    @Get(':id/members')
    getTeamMembers(
        @Param('id') teamId: string,
        @Query() paginationQuery: PagedReqDto,
    ): PagedResDto {
        // 1. Get userId from JWT token
        // 2. Check if user is in a team with ID: teamId
        // 3. Get all members of team with ID: teamId
        // 4. implement pagination
        console.log(teamId);
        return {
            data: [
                new TeamMemberResDto(
                    'teamMemberID',
                    'Oliver',
                    'Smith',
                    'oliver.smith@gmail.com',
                    false,
                ),
            ],
            metadata: {
                page: 1,
                pageSize: 10,
                total: 1,
            },
        };
    }

    @ApiPaginationResponse(TeamInviteResDto)
    @Get(':id/members/invites')
    getTeamInvites(
        @Param('id') teamId: string,
        @Query() paginationQuery: PagedReqDto,
    ): PagedResDto {
        // 1. Check if user is team admin
        // 2. Return only invites with pending status
        console.log(teamId);
        return {
            data: [
                new TeamInviteResDto(
                    'Invite ID',
                    'Inviter ID',
                    'example@gmail.com',
                    false,
                    new Date(),
                ),
            ],
            metadata: {
                page: 1,
                pageSize: 10,
                total: 1,
            },
        };
    }
    @ApiOperation({ summary: 'Leave a team' })
    @HttpCode(200)
    @Patch(':id')
    leaveTeam(@Param('id') teamId: string): void {
        // 1. Only normal users can leave a team
        // 2. Set isDeleted to true
        console.log(teamId);
    }
}
