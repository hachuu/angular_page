import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { airportlist } from '../../../data/airportDummy';
import { airportFilter, convertSearchText, createEmptySearchText, SearchText } from './airport-filter';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit, OnDestroy {

  public list: Array<any> = airportlist.locationInfoList;
  public test;
  public filteredList;
  public expanded = false;

  searchText: SearchText = createEmptySearchText();

  // @ViewChild inputEl
  @ViewChild('inputEl') inputEl: ElementRef;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
    console.log(this.list.length);
    console.log(this.inputEl);
  }

/**
 * 공항 검색
 * @param items 공항 리스트
 * @param options 검색 텍스트와 옵션
 */
  keyUp(event: KeyboardEvent) {
    const inputValue = this.inputEl.nativeElement.value;
    if (!!inputValue) {
      // 10/19 분기 처리
      // this.filteredList = this.list.filter(x => {
      // tslint:disable-next-line: max-line-length
      //   if (x.code.indexOf(this.test) > 0 || (/^[a-zA-Z]*$/.test(inputValue) && x.code.toLowerCase().indexOf(this.test.toLowerCase()) === 0)) {
      //     return x;
      //   }
      // });
      this.searchText = convertSearchText(inputValue);
      console.log(this.searchText);
      const options = {keyword: inputValue, ...this.searchText};
      this.filteredList = airportFilter(this.list, options);
    } else {
      this.filteredList = [];
    }
    console.log(this.filteredList.length);
  }

  // 메뉴 펼치기/닫기
  btnExpandedclick() {
    this.expanded = !this.expanded;
  }

  ngOnDestroy() {
  }

}
