import { Component, Input, OnInit } from '@angular/core';
import { LoginCheckService } from 'app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginToken: string;

  constructor(
    private service: LoginCheckService,
  ) { }

  ngOnInit(): void {
    this.checkLoginSession();
  }

  checkLoginSession() {
    this.loginToken = sessionStorage.getItem('token');
    return !!this.loginToken;
  }

  async login() {
    const loginResult = await this.service.doLogin();
    console.log(loginResult);
    console.log(Object.values(loginResult).join(''));
    const token = Object.values(loginResult).join('');
    if (!!token) {
      sessionStorage.setItem('token', token);
    }
  }
}
