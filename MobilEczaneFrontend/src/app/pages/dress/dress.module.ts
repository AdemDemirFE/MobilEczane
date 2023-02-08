import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DressPageRoutingModule } from './dress-routing.module';

import { DressPage } from './dress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DressPageRoutingModule
  ],
  declarations: [DressPage]
})
export class DressPageModule {}
