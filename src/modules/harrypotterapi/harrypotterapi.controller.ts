import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HarrypotterapiModule } from './harrypotterapi.module';
import { HarrypotterapiService } from './harrypotterapi.service';

@ApiTags('Harry Potter API')
@Controller('harrypotterapi')
export class HarrypotterapiController {

    constructor(
        private harryPotterApi : HarrypotterapiService
    ){}

    @Get('characters')
    getCharacters() : any {
        return this.harryPotterApi.getCharacters()
    }

    @Get('char/:name')
    public getCharByName(@Param('name') nombre : string) : any {
        return this.harryPotterApi.getCharacterByName(nombre);
    }

    @Get('houses')
    getHouses() : any {
        return this.harryPotterApi.getHouses();
    }

}
