import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportsiauuPage } from './importsiauu.page';

const routes: Routes = [
  {
    path: '',
    component: ImportsiauuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportsiauuPageRoutingModule {}
