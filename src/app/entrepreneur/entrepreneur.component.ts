import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss']
})
export class EntrepreneurComponent implements OnInit {
  userData:any;
  constructor() {
    this.userData=JSON.parse(localStorage.getItem("userData"));

  }

  ngOnInit() {
  }

}
