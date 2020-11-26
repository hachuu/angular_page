import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-layer',
  templateUrl: './email-layer.component.html',
  styleUrls: ['./email-layer.component.css']
})
export class EmailLayerComponent implements OnInit {

  @Input() openFlag: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  
}
