import { Controller, Get } from '@nestjs/common';

@Controller('pokeapi')
export class PokeapiController {
    @Get('Lista')
    getPoke() : string{
        return 'lista'
    }


}
