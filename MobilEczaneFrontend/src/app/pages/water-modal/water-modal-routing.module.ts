import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterModalPage } from './water-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WaterModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterModalPageRoutingModule {}
