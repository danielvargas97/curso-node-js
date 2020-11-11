import {  HttpException, HttpService, Injectable} from '@nestjs/common';
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

    async getPokemonId( id : string){
        try{
            const result = await this.http.get(`${this.url}/pokemon/${id}/`)
            .pipe( map( response => response.data))
            .toPromise()
            return result
        }
        catch(error){
            console.log('Fallo')
            throw new HttpException("Fallo al consultar", 400)
        }
    }


    pokemonProcessing(data){
        try {
            const arr = data.results.map( elem => elem.name)
            return arr
        } catch (error) {
            console.log('Fallo')
            throw new HttpException("JSON is incorrect", 400)            
        }
    }


}
