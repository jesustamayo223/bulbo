import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypographyPageRoutingModule } from './typography-routing.module';

import { TypographyPage } from './typography.page';
import { ComponenetsModule } from 'src/app/componenets/componenets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypographyPageRoutingModule,
    ComponenetsModule
  ],
  declarations: [TypographyPage]
})
export class TypographyPageModule {}
