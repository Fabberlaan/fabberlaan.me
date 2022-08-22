import { Controller, Get, Post, Header, Redirect } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Redirect('https://nestjs.com', 404)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
} 