import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  

  constructor(private http: HttpClient) { }



  //https://api.themoviedb.org/3/movie/popular?api_key=1ca0ed55a3cf5a5cb4c4f07ba5a32646&language=en-US&page=1
  popularMovies = 'https://imdb-api.com/en/API/MostPopularMovies/k_rg83bu58'
  baseUrl = '';
  apiKey = 'k_rg83bu58'

  //theMovieDB
  base_url = 'https://api.themoviedb.org/3/movie/';
  api_key = '1ca0ed55a3cf5a5cb4c4f07ba5a32646';
  imageBase = 'http://image.tmdb.org/t/p/w500'

  getLatestMovies(){
    //return this.http.get()
  }

  getPopularMovie(){
    return this.http.get(this.base_url+'popular?api_key='+this.api_key+'&language=en-US&page=1')
  }

  getPopularMovies(){
    return this.http.get(this.popularMovies)
  }

  getUpcoming(){

  }


}
