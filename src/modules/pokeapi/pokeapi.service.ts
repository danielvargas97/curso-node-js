import {  HttpService, Injectable} from '@nestjs/common';
import {map} from 'rxjs/operators';

@Injectable()
export class PokeapiService {
    private url : string = "https://pokeapi.co/api/v2"
    
    constructor( 
        private readonly http : HttpService                
    )
    {}

    getPokemonList(numero : Number, offset? : Number){
        return this.http.get(`${this.url}/pokemon?limit=${numero}&offset=${offset}`)
        .pipe( map( response => response.data))
    }


}
