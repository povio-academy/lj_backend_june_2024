import { Body, Controller, Post } from '@nestjs/common';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { CreateTeamAdminBodyDto } from './dto/create-team.admin.body.dto';
import { CreateTeamAdminResDto } from './dto/create-team.admin.res.dto';

@Controller(`${API_V1_ADMIN_PATH}/teams`)
export class TeamsAdminController {
  @Post()
  createTeam(@Body() newTeam: CreateTeamAdminBodyDto): CreateTeamAdminResDto {
    return new CreateTeamAdminResDto(newTeam.name, newTeam.description);
  }
}
