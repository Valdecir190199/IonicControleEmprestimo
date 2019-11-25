import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvarFuncionarioPage } from './salvar-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvarFuncionarioPageRoutingModule {}
