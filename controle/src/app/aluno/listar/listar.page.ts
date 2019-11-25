import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Aluno } from '../entidade/aluno';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaAlunos: Observable<Aluno[]>;

  constructor(private fire: AngularFireDatabase) {

    this.listaAlunos = this.fire.list<Aluno>('aluno').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))

    );
  }

  ngOnInit() {
  }

}
