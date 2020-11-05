import { Controller, Get } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';
import { RequestPokeapiService} from '../../shared/request-pokeapi/request-pokeapi.service'

@Controller('pokeapi')
export class PokeapiController {

    constructor( private readonly pokeapiService: PokeapiService){}

    @Get('quotes')
    getQuotes() {
        return this.pokeapiService.GetLista();
    }



    @Get('Lista')
    getPoke() : string{
        return 'lista'
    }


}
