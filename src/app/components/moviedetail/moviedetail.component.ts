import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/movie.service';
import { Movies } from 'src/app/models/movies.model';
import { Actors } from 'src/app/models/actors.model';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {

  
  @Input() currentMovie: Movies = {
    id: '',
    backdrop_path: '',
    budget: 0,
    genres: {id: 0, name: ''},
    homepage: '',
    original_title: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    runtime: 0,
    overview: ''
}

 credits: any = [];
 cast: Actors = {
  name: '',
  profile_path: '',
  character: ''
 };
  
  

  constructor(private movieSer: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
      this.getMovieById(this.route.snapshot.params["id"]);
      this.getActors(this.route.snapshot.params["id"]);
      
  }

  
  getMovieById(id: any){
    this.movieSer.getMovieById(id).subscribe((data: any)=>{
      this.currentMovie = data;
      data = {
        id: this.currentMovie.id,
        backdrop_path: this.currentMovie.backdrop_path,
        budget: this.currentMovie.budget,
        genres: this.currentMovie.genres,
        homepage: this.currentMovie.homepage,
        original_title: this.currentMovie.original_title,
        popularity: this.currentMovie.popularity,
        poster_path: this.currentMovie.poster_path,
        release_date: this.currentMovie.release_date,
        runtime: this.currentMovie.runtime,
        overview: this.currentMovie.overview
      }
      console.log(data.id);
    })
  }

  getActors(id: any){
    this.movieSer.getActors(id).subscribe((data: any)=>{
      this.credits = data.cast;

      // data = {
      //   name: this.cast.name,
      //   profile_path: this.cast.profile_path,
      //   character: this.cast.character
      // }
    
      console.log(this.credits[0].name);
    })
  }

}
