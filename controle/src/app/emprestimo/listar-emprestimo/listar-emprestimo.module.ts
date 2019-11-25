import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEmprestimoPageRoutingModule } from './listar-emprestimo-routing.module';

import { ListarEmprestimoPage } from './listar-emprestimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEmprestimoPageRoutingModule
  ],
  declarations: [ListarEmprestimoPage]
})
export class ListarEmprestimoPageModule {}
