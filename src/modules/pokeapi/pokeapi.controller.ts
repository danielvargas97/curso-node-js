import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';
import { RequestPokeapiService} from '../../shared/request-pokeapi/request-pokeapi.service'
import { ApiBody, ApiTags } from '@nestjs/swagger';
@ApiTags('Api Pokemones')
@Controller('pokeapi')
export class PokeapiController {

    constructor(
        private PokeApiService : PokeapiService
    ){}
    
    @Get('pokeList/:number')
    public getList(@Param('number') numero : Number) : any {
        return this.PokeApiService.getPokemonList(numero);
    }

    @Get('pokemon/:idPokemon')
    public getPokemonById(@Param('idPokemon') id : string) : any {
        console.log(`El numero del pokemon es ${id}`)
        return this.PokeApiService.getPokemonId(id)
    }

    @Post('ingreso')
    @ApiBody({type: Object })
    generarIngreso(@Body() datos: any){        
        return this.PokeApiService.pokemonProcessing(datos)
    }


}
