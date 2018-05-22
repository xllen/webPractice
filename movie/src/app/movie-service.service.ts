import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
@Injectable()
export class MovieServiceService {

  constructor(private http: Http) {
    this.http = http;
   }
  getMovie():Observable<any>{
    return this.http.get("/v2/movie/in_theaters").map((res:any)=> {
      return res.json();
    });
  }
 getMovieInfo(id):Observable<any>{
    return this.http.get("/v2/movie/subject/"+id).map((res:any)=> {
      return res.json();
    });
 }
 getMovieTop250():Observable<any>{
  return this.http.get("/v2/movie/top250").map((res:any)=> {
    return res.json();
  });
  }
}
