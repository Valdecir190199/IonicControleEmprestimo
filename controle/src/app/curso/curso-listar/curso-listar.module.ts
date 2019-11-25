import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoListarPageRoutingModule } from './curso-listar-routing.module';

import { CursoListarPage } from './curso-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoListarPageRoutingModule
  ],
  declarations: [CursoListarPage]
})
export class CursoListarPageModule {}
