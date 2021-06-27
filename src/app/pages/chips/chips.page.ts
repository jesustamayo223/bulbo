import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.page.html',
  styleUrls: ['./chips.page.scss'],
})
export class ChipsPage implements OnInit {

  corazon: boolean =false;
  color: boolean =false;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.corazon = !this.corazon;
  }
  changeColor(){
    this.color = !this.color;
  }

}
