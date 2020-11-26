import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';
@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  public inputDate: string;       // 검색어
  public movieList;
  public openFlag = false;
  public movieInfo;
  public loading;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
    // this.service.getMovie();
  }

  async searchMovie() {
    this.loading = true;
    // this.movieList = await this.service.getMovie(this.inputDate, '100');
    // .then(x => this.movieList = x);
    // console.log(this.service.getMovie(this.inputDate, '100'));
    console.log(this.movieList);
    this.loading = false;
  }

  // 영화 카드 레이어 오픈
  openMovieLayer(movie) {
    this.movieInfo = movie;
    this.openFlag = !this.openFlag;
  }

}
