import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {SimpsonapiService} from '../simpsonapi/simpsonapi.service';
@ApiTags('Simpsons API')
@Controller('simpsonapi')
export class SimpsonapiController {

    constructor( private readonly simpsonapiService: SimpsonapiService){}

    @Get('quotes')
    getQuotes() {
        return this.simpsonapiService.GetLista();
    }
    @Get('Lista')
    getPoke() : string{
        return 'lista'
    }

}
