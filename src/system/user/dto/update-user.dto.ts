/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-28 01:32:43
 * @UI: 
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class UpdateUserDto {
  @ApiProperty()
  readonly username: string;
  @ApiProperty({
    required: false,
  })
  readonly email: string;
  @ApiProperty()
  readonly bio: string;
  @ApiProperty()
  readonly image: string;
  @ApiProperty()
  password: string;
}