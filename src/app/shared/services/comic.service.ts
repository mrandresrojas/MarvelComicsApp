import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Comic} from 'src/app/shared/component/interface/comic.interface';


@Injectable({providedIn: 'root'})
export class ComicService {
PUBLIC_KEY='fc7c25bd4c8a44efbd265a54d630ada9';
HASH='df53c5e0734d0fce6fe9406af3b941aa';
URL_API=`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

constructor(private http: HttpClient ) { }
  searchComics(query=''){

  }
  getDetails(id:number){

  }
  getAllComics(): Observable <Comic[]> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any)=> data.data.results))
  }
}
