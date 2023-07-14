import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterBalanceHistoryPageRoutingModule } from './water-balance-history-routing.module';

import { WaterBalanceHistoryPage } from './water-balance-history.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    WaterBalanceHistoryPageRoutingModule
  ],
  declarations: [WaterBalanceHistoryPage]
})
export class WaterBalanceHistoryPageModule {}
