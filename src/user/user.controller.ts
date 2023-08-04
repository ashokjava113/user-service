import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.userService.findOne(id);
  }

  @Delete()
  async deleteOne(@Param('id') id) {
    return await this.userService.deleteOne(id);
  }

  @Patch()
  async updateOne(
    @Param('id') id,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return await this.userService.updateOne(id, createUserDto);
  }
}
