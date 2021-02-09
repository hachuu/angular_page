import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'app/service/pagination.service';
import { RestService } from 'app/service/rest.service';
@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  public inputData: string;       // 검색어
  public movieList;
  public openFlag = false;
  public movieInfo;
  public loading;

  // Array of all items
  // private allItems: any = [];

  // Pagination object
  pagination: any = {};

  // Paged items
  pagedItems: any[];

  constructor(
    private service: RestService,
    private pageService: PaginationService
  ) { }

  ngOnInit(): void {
    // this.service.getMovie();
  }

  setPage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }

    // Get pagination object from service
    this.pagination = this.pageService.getPagination(this.movieList.items.length, page);

    // Get current page of items
    this.pagedItems = this.movieList.items.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

  async searchMovie() {
    this.loading = true;
    this.movieList = await this.service.getMovie(this.inputData, '100');
    if (this.movieList) {
      this.setPage(1);
    }
    // .then(x => this.movieList = x);
    // console.log(this.service.getMovie(this.inputDate, '100'));
    this.loading = false;
  }

  // 영화 카드 레이어 오픈
  openMovieLayer(movie) {
    this.movieInfo = movie;
    this.openFlag = !this.openFlag;
  }

}
