# Myproject
- 개발 포트폴리오
- FlexBox를 통한 UI,
- Angular 기반의 오픈 api, serverless api(back-end : java spring Boot)연동을 통해 데이터 (영화 검색, 공휴일 검색, 책 검색, 한영 변환)을 가져온다.
- Server 2개 연동 가능 (Spring Boot server, Nodejs Express)
- local storag를 통한 데이터 저장, 삭제 
- Todo
  1. login session token 저장
  2. http get에 responseType으로 추가하기(Angular essential 429p)
  3. 자동완성 formControl로 제어하기 (Angular essential 417p)
  4. mac os Setting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server
yarn
Run `ng serve` for a dev server. Navigate to `http://localhost:6200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
yarn start
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### gitHub Page 배포
angular.json
```json
"deploy": {
          "builder": "angular-cli-ghpages:deploy",
          "options": {}
        }
```
ng build --prod --output-path dist --base-href https://github.com/hachuu/angular

### To-do

login UI/UX 
