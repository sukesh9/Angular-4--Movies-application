import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';
 
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
    id_movie: string = "";
    movie_Title: string = "";
    movie_Rated: string = "";
    movie_Released: string = "";
    movie_Director: string = "";
    movie_Actors: string = "";
    movie_Plot: string = "";
    movie_Poster: string = "";

    constructor(private _movieService: MovieService) {
    }
 
    ngOnInit() {
    }
 
    callMovieService() { 
        this._movieService.findMovie(this.id_movie)
            .subscribe(
              response => { 
                this.movie_Title = response.Title;
                this.movie_Rated = response["Rated"];
                this.movie_Released = response["Released"];
                this.movie_Director = response["Director"];
                this.movie_Actors = response["Actors"];
                this.movie_Plot = response["Plot"];
                this.movie_Poster = response["Poster"];
            },
            error => {
                console.log("Error. The findMovie result JSON value is as follows:");
                console.log(error);
            }
            ); 
    }
}