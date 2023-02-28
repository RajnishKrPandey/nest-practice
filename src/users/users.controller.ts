/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  // dependency injection: which class I need to instantiate for you behind the scenes
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({type: User, isArray: true})
  @ApiQuery({name: 'name', required: false})
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.usersService.findAll(name);
  }
  
  @ApiOkResponse({type: User, description: 'the user'})
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }
  @ApiCreatedResponse({type: User})
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
