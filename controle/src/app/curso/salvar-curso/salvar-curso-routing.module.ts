import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvarCursoPage } from './salvar-curso.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvarCursoPageRoutingModule {}
