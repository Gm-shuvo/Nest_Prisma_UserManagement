import { Injectable, Response } from '@nestjs/common';

@Injectable()
export class AppService {
  // send response to client
  getHello(): string {
    return 'Hello World!';
  }
}
