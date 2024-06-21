import { Expose } from 'class-transformer';

export class CreateTeamUserResDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
