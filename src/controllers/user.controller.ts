import { Controller, Get, Post, Route, Body,Tags } from 'tsoa';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from "../dtos/user.dto";

@Route("users")
@Tags("Users")
export class UserController extends Controller {
    private userService = new UserService();

    @Get("/")
    @Tags("Users")
    public async getUsers() {
        return this.userService.getUsers();
    }

    @Post("/")
    @Tags("Users")
    public async createUser(@Body() user: CreateUserDTO) {
        return this.userService.createUser(user);
    }
}