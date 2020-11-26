import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-layer',
  templateUrl: './book-layer.component.html',
  styleUrls: ['./book-layer.component.css']
})
export class BookLayerComponent implements OnInit {

  @Input() openFlag: boolean;
  @Input() bookInfo;
  constructor() { }

  ngOnInit(): void {
  }
}
