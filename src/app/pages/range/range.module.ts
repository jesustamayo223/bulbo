import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangePageRoutingModule } from './range-routing.module';

import { RangePage } from './range.page';
import { ComponenetsModule } from 'src/app/componenets/componenets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangePageRoutingModule,
    ComponenetsModule
  ],
  declarations: [RangePage]
})
export class RangePageModule {}
