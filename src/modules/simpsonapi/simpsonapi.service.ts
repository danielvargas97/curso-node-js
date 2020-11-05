import { HttpService, Injectable } from '@nestjs/common';
import {map} from 'rxjs/operators';
@Injectable()
export class SimpsonapiService {

    constructor(
        private http : HttpService
    ){}

    GetLista(){
        return this.http.get("https://thesimpsonsquoteapi.glitch.me/quotes")
        .pipe( map( response => response.data))
    }

    



}
