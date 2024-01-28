import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor (private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput){
    return this.prisma.user.create({ data })
  }

  async findAllUsers(){
    return this.prisma.user.findMany()
  }

  async findUserById(id: number){
    return this.prisma.user.findUnique({ where: { id } })
  }

  async updateUserById(id: number, data: Prisma.UserUpdateInput){
    console.log(id, data)
    return this.prisma.user.update({ where: { id }, data })
  }

  async deleteUserById(id: number){
    return this.prisma.user.delete({ where: { id } })
  }
}
