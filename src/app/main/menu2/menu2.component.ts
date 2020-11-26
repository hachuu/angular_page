import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { every, map } from 'rxjs/operators';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  public totalCalLinesList = [];  // 달력 li array
  public currentMonth: string;    // 현재 달
  public currentYear: string;     // 현재 년
  public currentDate: string;     // 현재 날짜
  public inputDate: string;       // 입력 날짜

  public holidays;

  constructor(
    private service: RestService,
  ) {
    // getDate()	날짜 중 일자를 숫자로 반환함. (1 ~ 31)
    // getDay()	날짜 중 요일을 숫자로 반환함. (일요일 : 0 ~ 토요일 : 6)
    // getFullYear()	날짜 중 연도를 4자리 숫자로 반환함. (yyyy년)
    // getMonth()	날짜 중 월을 숫자로 반환함. (1월 : 0 ~ 12월 : 11)
    // getTime()	1970년 1월 1일부터 현재까지의 시간을 밀리초(millisecond) 단위의 숫자로 반환함.
    // getHours()	시간 중 시를 숫자로 반환함. (0 ~ 23)
    // getMinutes()	시간 중 분을 숫자로 반환함. (0 ~ 59)
    // getSeconds()	시간 중 초를 숫자로 반환함. (0 ~ 59)
    // getMilliseconds()	시간 중 초를 밀리초(millisecond) 단위의 숫자로 반환함. (0 ~ 999)
  }

  ngOnInit(): void {
    this.makeCalendarData('init');
  }

  // 달력 기준일 설정
  changeStandardDate(enterType: string) {
    let standardDate;
    switch (enterType) {
      case 'init':
        standardDate = new Date();
        break;
      case 'change':
        standardDate = new Date(this.inputDate);
        break;
      case 'prev':
        if (this.currentMonth === '01') {
          // tslint:disable-next-line: radix
          standardDate = new Date((parseInt(this.currentYear) - 1).toString() + '-12-' + '01');
        } else {
          // tslint:disable-next-line: radix
          standardDate = new Date(this.currentYear + '-' + (parseInt(this.currentMonth) - 1).toString() + '-' + '01');
        }
        break;
      case 'next':
        if (this.currentMonth === '12') {
          // tslint:disable-next-line: radix
          standardDate = new Date((parseInt(this.currentYear) + 1).toString() + '-01-' + '01');
        } else {
          // tslint:disable-next-line: radix
          standardDate = new Date(this.currentYear + '-' + (parseInt(this.currentMonth) + 1).toString() + '-' + '01');
        }
        break;
      default:
        standardDate = new Date();
        break;
    }
    return standardDate;
  }

  // 캘린더 생성
  makeCalendarData(enterType: string) {
    const standardDate = this.changeStandardDate(enterType);
    const year = standardDate.getFullYear().toString();
    // tslint:disable-next-line: max-line-length
    const month = standardDate.getMonth() + 1 < 10 ? '0' + (standardDate.getMonth() + 1).toString() : (standardDate.getMonth() + 1).toString();
    const date = standardDate.getDate().toString();
    const day = standardDate.getDay();
    console.log('standardDate : ', standardDate);
    console.log('year : ', year);
    console.log('month : ', month);
    console.log('date : ', date);
    console.log('day : ', day);

    this.currentDate = date;
    this.currentMonth = month;
    this.currentYear = year;

    const strFirstDateMonth = year + '-' + month + '-01';
    console.log(strFirstDateMonth);
    const lastDateMonth = new Date(standardDate.getFullYear(), standardDate.getMonth() + 1, 0).getDate();

    console.log('lastDateMonth : ', lastDateMonth);

    const firstDateMonth = new Date(strFirstDateMonth);
    console.log(firstDateMonth);

    const firstLineCnt = 7 - firstDateMonth.getDay();
    const firstDateMonthCnt = firstDateMonth.getDay();
    const lastDateMonthCnt = new Date(standardDate.getFullYear(), standardDate.getMonth() + 1, 0).getDay();

    const middleLine = (lastDateMonth - (lastDateMonthCnt + 1 + firstLineCnt)) / 7;
    console.log('중간 달력 라인 개수:', middleLine);

    const totalCalLines: number[] = new Array(middleLine + 2);
    const weekDays: number[] = new Array(7);
    let dateValue = 0;
    for (let lIndex = 0; lIndex < totalCalLines.length; lIndex++) {
      const row = new Array();
      for (let wIndex = 0; wIndex < weekDays.length; wIndex++) {
        // row = [];
        // dateValue = dateValue + 1;
        if ((lIndex === 0 && firstDateMonthCnt > wIndex) || (lIndex === totalCalLines.length - 1 && lastDateMonthCnt < wIndex)) {
          row[wIndex] = '♥';
        } else {
          dateValue = dateValue + 1;
          row[wIndex] = dateValue.toString();
        }
      }
      this.totalCalLinesList[lIndex] = row;
    }
    console.log(this.totalCalLinesList);
    this.getHoliday();
  }

  // 날짜 수정
  changeDate() {
    if ((/^\d{8}$/).test(this.inputDate)) {
      this.inputDate = this.inputDate.substr(0, 4) + '-' + this.inputDate.substr(4, 2) + '-' + this.inputDate.substr(6, 2);
    }
    this.makeCalendarData('change');
  }

  async getHoliday() {
    await this.service.getHoliday(this.currentMonth, this.currentYear).then(x => {
      this.holidays = x.response.body.items.item;
      console.log(x);
    });
    if (!!this.holidays) {
      if (this.holidays.length > 1) {
        this.holidays = this.holidays.map(({locdate}) => locdate.toString());
      } else {
        this.holidays = [this.holidays.locdate.toString()];
      }
    }
  }

  getHolidayExpression(days: string) {
    if (!!this.holidays) {
      // const compareDate = (currentValue) => Number(currentValue.substr(6, 2)) === Number(days);
      // console.log(compareDate);
      if(this.holidays.some((value) => {
        if (Number(value.substring(6, 8)) === Number(days)) {
          return true;
        }
      })) {
        return 'holiday';
      }
    }
  }
}
