import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  componentes : any []=[
    {
      icon:'build',
      name:'Action sheet',
      redirectTo:'/action-sheet'
    },

    {
      icon:'alert-circle',
      name:'Alert',
      redirectTo:'/alert'
    },

    {
      icon:'hardware-chip',
      name:'Chips',
      redirectTo:'/chips'
    },

    {
      icon:'ribbon',
      name:'Badge',
      redirectTo:'/badge'
    },

    {
      icon:'radio-button-on-outline',
      name:'Button',
      redirectTo:'/button'
    },

    {
      icon:'id-card-outline',
      name:'Card',
      redirectTo:'/card'
    },

    {
      icon:'checkbox-outline',
      name:'Checkbox',
      redirectTo:'/checkbox'
    },

    {
      icon:'cube-outline',
      name:'Content',
      redirectTo:'/content'
    },
    
    {
      icon:'time-outline',
      name:'Date-time',
      redirectTo:'/date-time'
    },

    {
      icon:'star-outline',
      name:'Favoritos',
      redirectTo:'/fab'
    },

    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo:'/grid'
    },

    {
      icon:'swap-vertical-outline',
      name:'Scroll',
      redirectTo:'/scroll'
    },

  ];

  constructor() {}

}
