import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';
// const request = require('request');


const NAVER_CLIENT_ID     = 'rkGs4ri_LDBJWxH4thyy';
const NAVER_CLIENT_SECRET = 'VuINpm3hPd';
// rest api 호출 시 필요한 데이터 예시 START
/*

const reqObj = {
  uri: apiUrl,
  qs: option,
  headers: {
    'X-Naver-Client-Id': NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
  }
};
const httpOptions = new Headers(
  { 'Content-Type': 'application/json',
    'X-Naver-Client-Id': NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
  }
);
const headers = new HttpHeaders()
  .set('content-encoding', 'gzip')
  .set('Authorization', 'SSWS')
  .set('Content-Type', 'application/json; charset=UTF-8')
  .set('Access-Control-Allow-Credentials', 'true')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  .set('Access-Control-Max-Age', '3600')
  .set('Access-Control-Allow-Headers', '*')
  .set('X-Naver-Client-Id', NAVER_CLIENT_ID)
  .set('X-Naver-Client-Secret', NAVER_CLIENT_SECRET);

getLocalServer() {
  let params = new HttpParams();
  params = params.set('query', 'end');
  return this.http.get('http://localhost:8080/demoapi',
  {
    // headers,
    params: {
    },
  })
  .toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(console.log);
}
*/

// rest api 호출 시 필요한 데이터 예시 END

@Injectable({
    providedIn: 'root'
})
export class RestService {

  private GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes';

  private NAVER_API = 'https://openapi.naver.com/v1/search/movie.json';

  constructor(
    private http: HttpClient
  ) { }

  private extractData(res: Response) {
      const body = res;
      return body || { };
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     return of(result as T);
  //   };
  // }

  // getProducts(): Observable<any> {
  //   return this.http.get<any>(apiUrl)
  //     .pipe(
  //       tap(product => console.log('fetched products')),
  //       catchError(this.handleError('getProducts', []))
  //     );
  // }

  // getProduct(id: any): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<any>(url).pipe(
  //     tap(_ => console.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<any>(`getProduct id=${id}`))
  //   );
  // }

  async getHoliday(month: string, year: string) {
    let params = new HttpParams();
    params = params.set('query', 'end');
    let res;

    await this.http.get('http://localhost:8080/getRestDeInfo',
    {
      params: {
        year,
        month
      },
    })
    .toPromise()
    .then(response => {
      res = response;
      console.log(response);
    })
    .catch(console.log);
    return res;
  }

  async getMovie(keyword: string, display: string) {
    let res;
    let params = new HttpParams();
    params = params.set('query', 'end');
    await this.http.get('http://localhost:8080/getMovie',
    {
      params: {
        keyword,
        display
      },
    })
    .toPromise()
      .then(response => {
        console.log(response);
        res = response;
      })
      .catch(console.log);
    console.log(res);
    return res;
  }
  // getMovieList
  // async getMovie(keyword: string, display: string) {
  //   return await this.http.get(`${this.NAVER_API}?query=${keyword}&display=${display}`) .pipe(map((movies: any) => movies.items || []));
  // }

  // angular에서 직접 serverless로 호출하려 하는데 잘 안되넹 ㅠㅠ..
  // getMovie = async (keyword: string, display: string) => {
  //   const ID_KEY = 'id_key';
  //   const SECRET_KEY = 'secret_key';
  //   try {
  //     return await this.http.get('https://openapi.naver.com/v1/search/movie.json', { params: { query: keyword, display }, headers})
  //     .pipe(map((movies: any) => {
  //       console.log(movies);
  //       movies = movies.items || [];
  //     }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  // CORS 테스트
  getBookList(data: string): Observable<any> {
    return this.http.get(`${this.GOOGLE_API}?orderBy=newest&q=${data}`) .pipe(map((books: any) => books.items || []));
  }

  // 번역
  async getTranslateWord(text: string) {
    let res;
    console.log(text);
    let params = new HttpParams();
    params = params.set('query', 'end');
    await this.http.get('http://localhost:8080/translate',
    {
      params: {
        text,
      },
    })
    .toPromise()
      .then(response => {
        console.log(response);
        res = response;
      })
      .catch(console.log);
    return res;
  }
  

}
