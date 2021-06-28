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

    {
      icon:'fish-outline',
      name:'input',
      redirectTo:'/input'
    },

    {
      icon:'pricetag-outline',
      name:'item',
      redirectTo:'/item'
    },

    {
      icon:'list-outline',
      name:'list',
      redirectTo:'/list'
    },

    {
      icon:'volume-medium-outline',
      name:'media',
      redirectTo:'/media'
    },

    {
      icon:'menu-outline',
      name:'menu',
      redirectTo:'/menu'
    },

    {
      icon:'invert-mode-outline',
      name:'modal',
      redirectTo:'/modal'
    },

    {
      icon:'invert-mode-outline',
      name:'toast',
      redirectTo:'/toast'
    },

    {
      icon:'apps',
      name:'popover',
      redirectTo:'/popover'
    },

    {
      icon:'radio-button-off',
      name:'radio',
      redirectTo:'/radio'
    },

    {
      icon:'shuffle',
      name:'range',
      redirectTo:'/range'
    },

    {
      icon:'refresh',
      name:'refresher',
      redirectTo:'/refresher'
    },

    {
      icon:'restaurant',
      name:'reoder',
      redirectTo:'/reoder'
    },

    {
      icon:'search',
      name:'searchbar',
      redirectTo:'/searchbar'
    },

    {
      icon:'crop',
      name:'segment',
      redirectTo:'/segment'
    },

    {
      icon:'easel',
      name:'select',
      redirectTo:'/select'
    },

    {
      icon:'cube',
      name:'tabs',
      redirectTo:'/tabs'
    },

    {
      icon:'thumbs-up',
      name:'toggle',
      redirectTo:'/toggle'
    },

    {
      icon:'hammer',
      name:'toolbar',
      redirectTo:'/toolbar'
    },

    {
      icon:'folder',
      name:'typography',
      redirectTo:'/typography'
    },

  ];

  constructor() {}

}
