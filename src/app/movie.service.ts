import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { URLSearchParams} from '@angular/http';


@Injectable()
export class MovieService {
  movieURL1 = "http://www.omdbapi.com/?apikey=1b539bc&y=&plot=short&r=json&t=";
  URl = "http://www.omdbapi.com/?apikey=1b539bc&y=&plot=short&r=json";
  
  constructor(private _http: Http) {}
    findMovie(movie) { 
      const url = `${this.movieURL1}/${movie}`;
      return this._http.get(url)
          .map(response => {
              { console.log(response.json())
                return response.json() };
          })
          .catch(error => Observable.throw(error.json().error));
  }
  getPopular() {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    return this._http.get('http://www.omdbapi.com/?apikey=1b539bc&y=&plot=short&r=json', {search})
      .map(res => {
        return res.json();
      })
  }
  getGenres() {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    return this._http.get('http://www.omdbapi.com/?apikey=1b539bc&y=&plot=short&r=json', {search})
      .map(res => {
        console.log(res.json())
        return res.json();
      })
  }
  
}
