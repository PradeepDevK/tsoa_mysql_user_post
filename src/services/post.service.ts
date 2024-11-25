import { PrismaClient } from "@prisma/client";
import { CreatePostDTO } from "../dtos/post.dto";

const prisma = new PrismaClient();

export class PostService {
    public async getPosts() {
        return prisma.post.findMany({ include: { user : true } });
    }

    public async createPost(post: CreatePostDTO) {
        return prisma.post.create({ data: post });
    }
}