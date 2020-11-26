import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginCheckService implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient
    ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.router.navigate(['/main']);
    return false;
  }

  // doLogin시 Token 반환
  async doLogin() {
    let params = new HttpParams();
    params = params.set('query', 'end');
    let res;

    await this.http.get('http://localhost:8080/doLogin',
    {
      params: {},
    })
    .toPromise()
    .then(response => {
      res = response;
      console.log(response);
    })
    .catch(console.log);
    return res;
  }
}
