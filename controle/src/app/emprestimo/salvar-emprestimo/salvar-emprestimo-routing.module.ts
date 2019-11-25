import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvarEmprestimoPage } from './salvar-emprestimo.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarEmprestimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvarEmprestimoPageRoutingModule {}
