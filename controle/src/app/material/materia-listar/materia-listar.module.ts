import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriaListarPageRoutingModule } from './materia-listar-routing.module';

import { MateriaListarPage } from './materia-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriaListarPageRoutingModule
  ],
  declarations: [MateriaListarPage]
})
export class MateriaListarPageModule {}
