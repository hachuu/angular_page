import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';

@Component({
  selector: 'app-menu5',
  templateUrl: './menu5.component.html',
  styleUrls: ['./menu5.component.css']
})
export class Menu5Component implements OnInit {

  public inputData: string;       // 검색어
  public translateData;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
  }

  async searchWord() {
    this.translateData = await this.service.getTranslateWord(this.inputData);

  }

}
