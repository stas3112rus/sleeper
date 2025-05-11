import { CurrentUser } from '@app/common';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'apps/auth/src/guards/jwt-auth.guard';
import { CreateUserDto } from 'apps/auth/src/users/dto/create-user.dto';
import { UsersDocument } from '@app/common';
import { UsersService } from 'apps/auth/src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UsersDocument) {
    return user;
  }
}
