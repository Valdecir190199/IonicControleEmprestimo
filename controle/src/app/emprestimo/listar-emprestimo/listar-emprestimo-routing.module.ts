import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEmprestimoPage } from './listar-emprestimo.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEmprestimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEmprestimoPageRoutingModule {}
