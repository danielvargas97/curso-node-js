import { Controller, Get, Param } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';
import { RequestPokeapiService} from '../../shared/request-pokeapi/request-pokeapi.service'

@Controller('pokeapi')
export class PokeapiController {

    constructor(
        private PokeApiService : PokeapiService
    ){}
    
    @Get('pokeList/:number')
    getList(@Param('number') numero) : any {
        return this.PokeApiService.getPokemonList(numero);
    }


}
