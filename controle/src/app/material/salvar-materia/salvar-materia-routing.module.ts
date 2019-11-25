import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvarMateriaPage } from './salvar-materia.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarMateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvarMateriaPageRoutingModule {}
