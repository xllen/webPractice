import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top250',
  templateUrl: './top250.component.html',
  styleUrls: ['./top250.component.css'],
  providers: [MovieServiceService]
})
export class Top250Component implements OnInit {
  top250: any;
  constructor(private service: MovieServiceService,private route: Router) { }

  ngOnInit() {
    //获取top250电影信息
    this.service.getMovieTop250().subscribe((data:any) => {
        this.top250 = data.subjects;
        console.log(this.top250);
        //遍历获取每个元素的索引
        for(let i = 0; i<= this.top250.length; i++){
          this.top250[i].index = i
        }
    });
  }
  goMovie(movieId){
    this.route.navigate(['/movies',movieId]);
  }
}
