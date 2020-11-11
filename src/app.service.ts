import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {    

  personas : User[]
  constructor() {
    this.getPrueba();
  }


  getHello(): string {
    return 'Hoy es el dia, señores. Hoy XD';
  }


  getPrueba() {

    const numero: number = 2;
    const ejemplo = ['xd']
    ejemplo.push('exec')


    const usuario: User = {
      Nombre: 'Daniel',
      Edad: 22
    }
    console.log(usuario)
    console.log(`La edad es ${usuario.Edad}`)
    console.log(usuario.Altura)
    console.log(this.multiplicar(2, 3, 2))
    console.log(this.multiplicar(2, 3))

    console.log(ejemplo);

    let valor_1 = 10
    let valor_2 = 20
    const suma = (a,b) => {
      let suma = a+b;
      return suma;
    }

    console.log(suma(valor_1,valor_2))
    this.personas = [
    {
        Nombre : 'Daniel',
        Edad: 20
    },

    {
      Nombre : 'Patricio',
      Edad: 35
    },

    {
      Nombre : 'Jorge',
      Edad: 33,
      Altura : 170
    }
  ]
  const filtro = this.personas.filter(data => data.Edad > 25 )
  console.log(filtro)

  const mapeo = this.personas.map(data => {
    const obj = {
      Nombre: data.Nombre,
      Vejez: `Su vejez es de : ${data.Edad}`,
      algo : 'XD'
    }
    return obj
  })

  console.log(mapeo)
  }

  multiplicar(a: number, b: number, c?: number): number {
    if (c) {
      return a * b * c
    }
    else {
      return a * b;
    }
  }

  hola() {
    return 3;
  }

  holaParam(texto: string) {

    return {
      mensaje: `Su palabra es ${texto}`

    }
  }

  suma(a: number, b: number) {
    const c = a + b;
    return `El resultado es ${c}`
  }

}


interface User {
  Nombre: string,
  Edad: number,
  Genero?: string,
  Altura?: number
}
