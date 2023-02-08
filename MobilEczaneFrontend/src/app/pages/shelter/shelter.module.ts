import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShelterPageRoutingModule } from './shelter-routing.module';

import { ShelterPage } from './shelter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShelterPageRoutingModule
  ],
  declarations: [ShelterPage]
})
export class ShelterPageModule {}
