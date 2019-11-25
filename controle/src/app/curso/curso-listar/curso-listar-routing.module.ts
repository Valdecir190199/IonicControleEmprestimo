import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoListarPage } from './curso-listar.page';

const routes: Routes = [
  {
    path: '',
    component: CursoListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoListarPageRoutingModule {}
