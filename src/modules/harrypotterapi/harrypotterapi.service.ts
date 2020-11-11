import { HttpService, Injectable } from '@nestjs/common';
import {map} from 'rxjs/operators'
@Injectable()
export class HarrypotterapiService {
    private api_key : string = "$2a$10$FuvPiH01SBjaAagBMPo0g.ADT8vasSnJY48jc.1SqcYkrHFrGhebi";
    private base_url : string = "https://www.potterapi.com/v1/";

    constructor(
        private readonly http : HttpService
    ){}

    getCharacters(){
        return this.http.get(`${this.base_url}characters?key=${this.api_key}`)
        .pipe( map( response => response.data) )
    }

    getCharacterByName(name : string ){
        return this.http.get(`${this.base_url}characters?name=${name}&key=${this.api_key}`)
        .pipe( map( response => response.data) )        
    }

    getHouses() {
        return this.http.get(`${this.base_url}houses?key=${this.api_key}`)
        .pipe( map( response => response.data) )        
    }

}
