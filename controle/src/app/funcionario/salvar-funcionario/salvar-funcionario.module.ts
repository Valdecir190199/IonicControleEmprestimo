import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvarFuncionarioPageRoutingModule } from './salvar-funcionario-routing.module';

import { SalvarFuncionarioPage } from './salvar-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvarFuncionarioPageRoutingModule
  ],
  declarations: [SalvarFuncionarioPage]
})
export class SalvarFuncionarioPageModule {}
