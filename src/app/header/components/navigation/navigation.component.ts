import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loadAPI: Promise<any>;
  showMenuList = false;

  public openFlag = false;
  public signIn = true; // 임시로 로그인 된 것 처럼

  @Input() menuList;

  constructor(
    private router: Router
  ) {
  }
  // <script src="https://kit.fontawesome.com/fb5c23ba72.js" crossorigin="anonymous"></script>

  ngOnInit(): void {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
    });
  }

  public loadScript() {
    const url = 'https://kit.fontawesome.com/fb5c23ba72.js';
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.crossOrigin = 'anonymous';
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  // 네비게이션바 토글
  clickToggleBtn() {
    this.showMenuList = !this.showMenuList;
  }

  // 로그인 페이지
  goLoginPage() {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.signIn = false;
  }

  goGitHub() {
    window.open('https://github.com/hachuu');
  }

  showEmailInfo() {
    this.openFlag = !this.openFlag;
  }

}
