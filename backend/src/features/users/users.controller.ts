import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {

  }

  @Post('add')
  create(@Body() data) {
    return this.service.createUser(data);
  }

  @Get('')
  getAllUsers() {
    return this.service.fetchUsers();
  }

  @Get('/:id')
  findOne(@Param() param) {
    return this.service.getUser(param.id);
  }

  @Put('/:id')
  update(@Param() param, @Body() data) {
    return this.service.updateUser(param.id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.removeUser(id);
  }
}
