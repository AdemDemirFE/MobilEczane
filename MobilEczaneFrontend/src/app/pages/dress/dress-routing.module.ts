import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DressPage } from './dress.page';

const routes: Routes = [
  {
    path: '',
    component: DressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DressPageRoutingModule {}
