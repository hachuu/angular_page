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
    // this.router.navigate(['/main']);
    return true;
  }

  // doLogin시 Token 반환
  async doLogin() {
    let params = new HttpParams();
    params = params.set('query', 'end');

    const login = await this.http.get('http://localhost:8080/doLogin', {params: {}}).toPromise();
    if (!!login) {
      this.router.navigate(['/main']);
    }
    return login;
  }
}
