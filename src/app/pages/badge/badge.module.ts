import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgePageRoutingModule } from './badge-routing.module';

import { BadgePage } from './badge.page';
import { ComponenetsModule } from 'src/app/componenets/componenets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgePageRoutingModule,
    ComponenetsModule
  ],
  declarations: [BadgePage]
})
export class BadgePageModule {}
