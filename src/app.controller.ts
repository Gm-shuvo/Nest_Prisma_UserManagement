import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

// send response to client
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
