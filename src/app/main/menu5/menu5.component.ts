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
  public inputLanguage;
  public loadedData;
  public loading = false;

  constructor(
    private service: RestService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loadedData = JSON.parse(localStorage.getItem('saveWord'));
  }

  async searchWord() {
    try {
      this.loading = true;
      this.inputLanguage = await this.service.getDetectLang(this.inputData);
      this.translateData = await this.service.getTranslateWord(this.inputData, this.inputLanguage.langCode);
      this.loading = false;
    } catch(err) {
      this.loading = false;
      console.log(err);
    }
    if (!!this.translateData) {
      this.saveData(this.inputData, this.translateData.message.result.translatedText);
      this.loadData();
    }
  }

  saveData(input: string, result: string) {
    const object = {input, result};
    let newArr = [];
    if (!!this.loadedData) {
      const saved = this.loadedData;
      newArr = [...saved];
      newArr.push(object);
    } else {
      newArr.push(object);
    }
    console.log(newArr);
    localStorage.setItem('saveWord', JSON.stringify(newArr));
  }

  removeData(index: number) {
    this.loadedData.splice(index, 1);
    localStorage.setItem('saveWord', JSON.stringify(this.loadedData));
  }
}
