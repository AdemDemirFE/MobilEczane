import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterBalancePageRoutingModule } from './water-balance-routing.module'; 
import { WaterBalancePage } from './water-balance.page';
import { TranslateModule } from '@ngx-translate/core'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),  
    WaterBalancePageRoutingModule 
  ],

       declarations: [WaterBalancePage],
})
export class WaterBalancePageModule { }
