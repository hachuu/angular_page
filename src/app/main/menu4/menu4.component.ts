import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {
  public bookTest$: Observable<any[]>;
  public inputData: string;

  public openFlag = false;
  public bookInfo;
  public loading;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
  }

  getBook(data: string) {
    this.loading = true;
    this.bookTest$ = this.service.getBookList(data);
    this.bookTest$.subscribe( x => {
      if (!!x) {
        this.loading = false;
      }
    });
  }

  openBookLayer(book) {
    this.bookInfo = book;
    this.openFlag = !this.openFlag;
  }
}
