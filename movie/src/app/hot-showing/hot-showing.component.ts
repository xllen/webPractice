import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hot-showing',
  templateUrl: './hot-showing.component.html',
  styleUrls: ['./hot-showing.component.css'],
  providers: [MovieServiceService]
})
export class HotShowingComponent implements OnInit {
  movieList:Object;
  constructor(private service: MovieServiceService,private route: Router) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getMovie().subscribe((data:any) => {
      this.movieList = data.subjects;
      console.log('in component : ',this.movieList);
    });
  }
  goMovie(movieId){
    this.route.navigate(['/movies',movieId]);
  }
}
