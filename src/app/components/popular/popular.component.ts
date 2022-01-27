import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  popularMovies: any = [];
  results: any = {};
  

  currentMovie: any = this.popularMovies;
  currentIndex= -1;

  page = 0;

  ngOnInit(): void {
    this.page = this.page + 1;
    this.getMovie(this.page)
  }

  getMovie(pageNumber:any){
    this.movieService.getPopularMovie(`${this.page}`).subscribe((res: any)=>{
      //results of page 1
      this.popularMovies = res.results;

      console.log(res)
      //response
      console.log(res.page);

      console.log(res.total_pages);
    })
  }

  nextPage(){

    this.page = this.page + 1;
    console.log("this is page :"+this.page)
    this.getMovie(this.page);
  }

  back(){
    this.page = this.page - 1;
    this.getMovie(this.page)
  }

  setActiveMovie(results: {}, index: number): void {
    this.currentMovie = results;
    this.currentIndex = index;
  }

  
}