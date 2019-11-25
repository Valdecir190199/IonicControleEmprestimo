import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvarEmprestimoPageRoutingModule } from './salvar-emprestimo-routing.module';

import { SalvarEmprestimoPage } from './salvar-emprestimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvarEmprestimoPageRoutingModule
  ],
  declarations: [SalvarEmprestimoPage]
})
export class SalvarEmprestimoPageModule {}
