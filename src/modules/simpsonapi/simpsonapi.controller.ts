import { Controller, Get, Param } from '@nestjs/common';
import {SimpsonapiService} from '../simpsonapi/simpsonapi.service';
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
