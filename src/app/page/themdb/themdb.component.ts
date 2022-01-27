import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.model';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-themdb',
  templateUrl: './themdb.component.html',
  styleUrls: ['./themdb.component.scss']
})
export class ThemdbComponent implements OnInit {
  

  constructor(private movieService: MovieService) { }
  popularMovies: any = [];
  results: any = {};
  total_pages?: number;
  total_results?: number;

  currentMovie: any;
  currentIndex= -1;

  //pagination
  //pagination
  page: any;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9];

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
    this.movieService.getPopularMovie("2").subscribe((res: any)=>{
      this.popularMovies = res.results;
      // console.log(res.page);
      // console.log(res.total_pages);
      console.log(this.popularMovies)
    })
  }

  setActiveMovie(results: Movies, index: number): void {
    this.currentMovie = results;
    this.currentIndex = index;
    this.getMovie()
  }

  onTableDataChange(event: any){
    this.page = event;
    this.getMovie();
  }  

  onTableSizeChange(event: any): void {
    this.total_pages = event.target.value;
    this.tableSize = 1;
    this.getMovie();
  }  
}
