import { Controller, Request, Get, UseGuards } from '@nestjs/common'
import { PermService } from './perm.service'
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Permissions } from '../shared/decorators/permissions.decorator'
import { AuthGuard } from '@nestjs/passport'
import { RolesGuard } from '../shared/guards/roles.guard'
import { User } from '../user/user.decorator';

@ApiBearerAuth()
@ApiTags('基础')
@Controller()
// @UseGuards(AuthGuard('jwt'), RolesGuard)
export class PermController {
  constructor(private readonly permService: PermService) {}

  @Get('perm')
  @ApiOperation({ summary: '登录之后，查询用户所有菜单按钮权限' })
  @Permissions('')
  async getFrontEndPerm(@User('id') userId: number,) {
    const perms = await this.permService.findUserPerms(userId)
    return {
      statusCode: 200,
      message: '查询权限成功',
      data: {
        dynamicMenu: perms.map((v) => {
          return { type: v['m_type'], code: v['m_code'] }
        }),
        avatar: "req['user'].avatar",
        nickname: "req['user'].nickname",
      },
    }
  }
}
