import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-themdb',
  templateUrl: './themdb.component.html',
  styleUrls: ['./themdb.component.scss']
})
export class ThemdbComponent implements OnInit {
  

  constructor(private movieService: MovieService) { }
  popularMovies: any = [];
  results: any = [];

  currentMovie: any;
  currentIndex= -1;

  //pagination
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
    this.movieService.getPopularMovie().subscribe((res: any)=>{
      this.popularMovies = res.results;
      console.log(res.results);
    })
  }

  setActiveMovie(results: [], index: number): void {
    this.currentMovie = results;
    this.currentIndex = index;
    
  }
}
