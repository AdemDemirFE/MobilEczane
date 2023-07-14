import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterModalPageRoutingModule } from './water-modal-routing.module';

import { WaterModalPage } from './water-modal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    WaterModalPageRoutingModule
  ],
  declarations: [WaterModalPage]
})
export class WaterModalPageModule {}
