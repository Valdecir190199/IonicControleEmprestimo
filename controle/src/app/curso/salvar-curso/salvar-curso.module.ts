import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvarCursoPageRoutingModule } from './salvar-curso-routing.module';

import { SalvarCursoPage } from './salvar-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvarCursoPageRoutingModule
  ],
  declarations: [SalvarCursoPage]
})
export class SalvarCursoPageModule {}
