import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvarMateriaPageRoutingModule } from './salvar-materia-routing.module';

import { SalvarMateriaPage } from './salvar-materia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvarMateriaPageRoutingModule
  ],
  declarations: [SalvarMateriaPage]
})
export class SalvarMateriaPageModule {}
