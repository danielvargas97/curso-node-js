import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Simmmmmmmmmmmmmmmmmmmmmm!';
  }

  hola(){
    return 3;
  }

  holaParam( texto : string){

      return {
          mensaje : `Su palabra es ${texto}$`

      }
  }

  suma( a : number , b: number){
    const  c = a+b;
    return `El resultado es ${c}`
  }

}
