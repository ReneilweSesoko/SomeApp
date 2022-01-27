import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from './models/movies.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  

  constructor(private http: HttpClient) { }


  //https://api.themoviedb.org/3/movie/popular?api_key=1ca0ed55a3cf5a5cb4c4f07ba5a32646&language=en-US&page=1

  //theMovieDB
  base_url = 'https://api.themoviedb.org/3/movie/';
  api_key = '1ca0ed55a3cf5a5cb4c4f07ba5a32646';
  imageBase = 'http://image.tmdb.org/t/p/w500'

  

  getLatestMovies(){
    //return this.http.get()
  }

  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=1ca0ed55a3cf5a5cb4c4f07ba5a32646&language=en-US
  getMovieById(id: any): Observable<any>{
    return this.http.get(this.base_url+`${id}`+'?api_key='+this.api_key+'&language=en-US')
  }

  getPopularMovie(pageNumber:any): Observable<any[]>{

    return this.http.get<any[]>(this.base_url+'popular?api_key='+this.api_key+'&language=en-US&page='+`${pageNumber}`)
    
  }

  getUpcoming(){

  }

  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=1ca0ed55a3cf5a5cb4c4f07ba5a32646&language=en-US
  getActors(id: any):Observable<any>{
    return this.http.get(this.base_url+`${id}`+'/credits?api_key='+this.api_key+'&language=en-US')
  }

  


}
