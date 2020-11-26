import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-layer',
  templateUrl: './movie-layer.component.html',
  styleUrls: ['./movie-layer.component.css']
})
export class MovieLayerComponent implements OnInit {

  @Input() openFlag: boolean;
  @Input() movieInfo;
  constructor() { }

  ngOnInit(): void {
  }

  replaceHtmlTag(text: string) {
    return text.replace(/(<([^>]+)>)/ig, '');
  }

  // 네이버 영화 검색
  goMovieInfo(link: string) {
    window.open(link);
  }

}
