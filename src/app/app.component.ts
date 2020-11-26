import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';

  constructor(@Inject(DOCUMENT) private doc) {
    this.loadLink();
  }

  public loadLink() {
    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
    this.doc.head.appendChild(link);
  }
}
