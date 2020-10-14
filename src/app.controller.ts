import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hola')
  getHola () {
    return this.appService.hola();
  }

  @Get('para')
  getParametro( @Param('palabra/:palabra') texto) : any{
      console.log(texto)
      return this.appService.holaParam(texto);

  }

}
