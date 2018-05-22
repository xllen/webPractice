import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http,Response } from '@angular/http';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieServiceService]
})
export class MovieDetailComponent implements OnInit {
  private movieId: number;
  //ActivatedRoute 保存着路由的参数
  private movieInfo = [];
  del_move:number;
  starStyle:any= {};
  movieCommends: Object;
  constructor(private route: ActivatedRoute,
              private http: Http,
              private service: MovieServiceService) { }

  ngOnInit() {
    //获取参数
    this.route.params.subscribe((params) => this.movieId = params["movieId"]);
    console.log(this.movieId);
    //获取电影信息
    this.service.getMovieInfo(this.movieId).subscribe((data:any) => {
      this.movieInfo.push(data);
      console.log('in component : ',this.movieInfo);
      //根据分数渲染星星
    this.del_move =(this.movieInfo[0].rating.average * 120)/10;
    this.starStyle= {
      "background-position": -this.del_move+"px 0px",
      "left": this.del_move+"px"
    };
    });
  }
}
