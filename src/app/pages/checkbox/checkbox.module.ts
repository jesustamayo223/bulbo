import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxPageRoutingModule } from './checkbox-routing.module';

import { CheckboxPage } from './checkbox.page';
import { ComponenetsModule } from 'src/app/componenets/componenets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxPageRoutingModule,
    ComponenetsModule
  ],
  declarations: [CheckboxPage]
})
export class CheckboxPageModule {}
