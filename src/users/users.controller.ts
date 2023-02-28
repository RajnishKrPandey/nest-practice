import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // dependency injection: which class I need to instantiate for you behind the scenes
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: any): any {
    return this.usersService.createUser();
  }
}
