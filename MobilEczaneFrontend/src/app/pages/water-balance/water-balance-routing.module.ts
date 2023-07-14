import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterBalancePage } from './water-balance.page';

const routes: Routes = [
  {
    path: '',
    component: WaterBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterBalancePageRoutingModule {}
