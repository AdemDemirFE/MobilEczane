import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMedicinesPage } from './my-medicines.page';

const routes: Routes = [
  {
    path: '',
    component: MyMedicinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMedicinesPageRoutingModule {}
