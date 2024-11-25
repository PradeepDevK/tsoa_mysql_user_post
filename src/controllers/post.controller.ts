import { Controller, Route, Get, Post, Body, Tags } from "tsoa";
import { PostService } from "../services/post.service";
import { CreatePostDTO } from "../dtos/post.dto";

@Route("posts")
@Tags("Posts")
export class PostController extends Controller {
    private postService = new PostService();

    @Get("/")
    @Tags("Posts")
    public async getPosts() {
        return this.postService.getPosts();
    }

    @Post("/")
    @Tags("Posts")
    public async createPost(@Body() post: CreatePostDTO) {
        post.userId = parseInt(post.userId as unknown as string, 10);

        if (isNaN(post.userId)) {
            throw new Error("Invalid userId. It must be a valid number.");
        }

        return this.postService.createPost(post);
    }
}