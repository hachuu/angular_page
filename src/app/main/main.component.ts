import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { airportlist } from 'data/dummy';
import { menuList } from 'app/card/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  // tslint:disable-next-line: ban-types
  public list: Array<Object> = airportlist;
  public menuList = menuList;
  public menuIdx = 0;
  public currentURL: string;

  constructor(
    private router: Router
  ) {
    this.currentURL = this.router.url;
  }

  ngOnInit() {
    console.log(this.router);
    console.log(airportlist.length);
  }

  // 메뉴 변경
  changeMenu(i: number) {
    this.menuIdx = i;
    this.currentURL = this.menuList[i].router;
  }


  // sortLists(resultLists) {
  //   this.newAreaLists = {};
  //   if (this.rnFlowType === 'RE' || this.rnFlowType === 'NR') {
  //     resultLists.areaList.forEach(area => {
  //       this.newAreaLists[area.areaCode] = {
  //         areaName: area.areaName,
  //         groupList: {}
  //       };
  //       this.newAreaLists[area.areaCode].groupList['operate'] = {airportList: []};
  //       if (this.rnFlowType === 'RE') {
  //         this.newAreaLists[area.areaCode].groupList['nonoperate'] = {airportList: []};
  //         this.newAreaLists[area.areaCode].groupList['rail'] = {airportList: []};
  //       }
  //     });
  //     let operateOfCityCode = false;
  //     resultLists.locationInfoList.forEach((location, index) => {
  //       // 레드마인: #179351 - 취항지, 미취항지 체크 전 cityCode 묶음
  //       // 도시 코드 설정이 취항지 true 인 경우,
  //       // 포함되는 하위 공항 코드를 모두 본 코드 위치 아래 묶어서 정렬 표출되도록 요청드립니다.
  //       // (하위 공항 코드 취항지 true/false 상관없이 상위 도시 코드 위치에 묶임)

  //       let group = 'operate';
  //       if (this.rnFlowType === 'RE') {
  //         if (location.airportType === 'RAL') {
  //           group = 'rail';
  //         } else  if (location.serviceYn === 'Y') {
  //           group = 'operate';
  //           if (location.airportType === 'CTY') {
  //             operateOfCityCode = true; // => 상위 공항의 취항지 유무에 따른 다음 공항의 구분 값
  //           }
  //         } else {
  //           if (location.airportType === 'CTY') {
  //             operateOfCityCode = false; // => 상위 공항의 취항지 유무에 따른 다음 공항의 구분 값
  //           }
  //           if (index !== 0 && !!location.cityCode && location.cityCode === resultLists.locationInfoList[index-1].cityCode) {
  //             group = operateOfCityCode ? 'operate' : 'nonoperate';
  //           } else {
  //             group = 'nonoperate';
  //             if (operateOfCityCode) {
  //               operateOfCityCode = false;
  //             }
  //           }
  //         }
  //       }
  //       // const group = location.airportType === 'RAL' ? 'rail' : location.serviceYn === 'Y' ? 'operate' : 'nonoperate';
  //       if(this.pageName !== 'bonusSeatsMail' ||  this.checkBonusSeatsAirport(location.airportCode)) {
  //         if(!!this.newAreaLists[location.areaCode] && !!this.newAreaLists[location.areaCode].groupList[group]) {
  //           this.newAreaLists[location.areaCode].groupList[group].airportList.push(
  //             {
  //              ...location
  //             }
  //           );
  //         }
  //       }
  //     });
  //   } else if (this.rnFlowType === 'ST') {
  //     resultLists.areaList.forEach(area => {
  //       this.newAreaLists[area.areaCode] = {
  //         areaName: area.areaName,
  //         countryList: {}
  //       };
  //     });

  //     resultLists.locationInfoList.forEach(location => {
  //       if(!this.newAreaLists[location.areaCode].countryList[location.countryCode]) {
  //         this.newAreaLists[location.areaCode].countryList[location.countryCode] = {
  //           countryName: location.countryName,
  //           airportList: [
  //             {
  //               ...location
  //             }
  //           ]
  //         };
  //       } else {
  //         this.newAreaLists[location.areaCode].countryList[location.countryCode].airportList.push(
  //           {
  //             ...location
  //           }
  //         );
  //       }
  //     });
  //   }
  // }

}
