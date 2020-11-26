import { Component, Input, OnInit } from '@angular/core';
import { LoginCheckService } from 'app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginCheckService,
  ) { }

  ngOnInit(): void {

  }

  login() {
    this.service.doLogin();
  }

}
