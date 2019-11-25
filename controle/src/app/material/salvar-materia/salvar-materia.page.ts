import { Material } from './../entidade/material';
import { Component, OnInit } from '@angular/core';

// importando referencia do firebase
import { AngularFireDatabase } from "@angular/fire/database";

//realizar a importação e a referência de Router
import {Router } from '@angular/router';

@Component({
  selector: 'app-salvar-materia',
  templateUrl: './salvar-materia.page.html',
  styleUrls: ['./salvar-materia.page.scss'],
})
export class SalvarMateriaPage implements OnInit {

  material: Material = new Material();


  constructor(private banco: AngularFireDatabase ,private rota: Router) { }

  ngOnInit() {
  }

  salvar(){
    this.banco.list('material').push(this.material);
    this.material = new Material();
    this.rota.navigate(['materia-listar']);

    }

}
