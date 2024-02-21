import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @Body()
    createUserDto: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() updateUserDto: User) {
    return this.userService.update(updateUserDto);
  }

  @Patch()
  update(@Body() updateUserDto: User) {
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  removeById(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Delete()
  remove(@Body() user: User) {
    return this.userService.remove(user.id);
  }
}
