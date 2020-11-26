import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuList } from 'app/card/menu';
import { airportlist } from 'data/dummy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  public list: Array<Object> = airportlist;
  public menuList = menuList;
  public menuIdx = 0;
  public currentURL: string;

  public returnValue;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // 메뉴 변경
  changeMenu(i: number) {
    this.menuIdx = i;
    this.currentURL = this.menuList[i].router;
  }

}
