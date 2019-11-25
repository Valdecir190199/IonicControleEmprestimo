import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioListarPageRoutingModule } from './funcionario-listar-routing.module';

import { FuncionarioListarPage } from './funcionario-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioListarPageRoutingModule
  ],
  declarations: [FuncionarioListarPage]
})
export class FuncionarioListarPageModule {}
