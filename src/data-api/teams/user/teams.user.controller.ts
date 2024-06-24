import { Body, Controller, Post } from '@nestjs/common';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateTeamUserBodyDto } from './dto/create-team.user.body.dto';
import { CreateTeamUserResDto } from './dto/create-team.user.res.dto';

@Controller(`${API_V1_USER_PATH}/teams`)
export class TeamsUserController {
  @Post()
  createTeam(@Body() createTeam: CreateTeamUserBodyDto) {
    return new CreateTeamUserResDto(createTeam.name, createTeam.description);
  }
}
