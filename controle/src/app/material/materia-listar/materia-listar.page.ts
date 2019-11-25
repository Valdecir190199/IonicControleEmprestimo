
import { Component, OnInit } from '@angular/core';

//Importacoes
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Material } from '../entidade/material';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-materia-listar',
  templateUrl: './materia-listar.page.html',
  styleUrls: ['./materia-listar.page.scss'],
})
export class MateriaListarPage implements OnInit {

  listaMateriais: Observable<Material[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaMateriais = this.fire.list<Material>('material').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      }
      ))));
    }

  ngOnInit() {
  }

}
