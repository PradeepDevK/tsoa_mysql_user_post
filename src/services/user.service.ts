import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { CreateUserDTO } from "../dtos/user.dto";


export class UserService {
    public async getUsers() {
        return prisma.user.findMany({ include: { posts: true } });
    }

    public async createUser(user: CreateUserDTO) {
        return prisma.user.create({ data: user });
    }
}