import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterBalanceHistoryPage } from './water-balance-history.page';

const routes: Routes = [
  {
    path: '',
    component: WaterBalanceHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterBalanceHistoryPageRoutingModule {}
