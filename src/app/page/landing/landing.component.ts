import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  popularMovies: any = [];
  items: any = [];

  ngOnInit(): void {
    
  }

  



}
