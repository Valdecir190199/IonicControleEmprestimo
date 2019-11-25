import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaListarPage } from './materia-listar.page';

const routes: Routes = [
  {
    path: '',
    component: MateriaListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaListarPageRoutingModule {}
