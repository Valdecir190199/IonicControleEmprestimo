
import { Component, OnInit } from '@angular/core';

// Importacoes
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Curso } from '../../curso/entidade/curso';
import { Aluno } from './../entidade/aluno';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {


  aluno: Aluno = new Aluno();
  //lista de estado para inserir no combobox
  listaCurso: Observable<Curso[]>;

  constructor(private banco: AngularFireDatabase, private rota: Router) {
    //realizando a busca de todos os cursos
    this.listaCurso = this.banco.list<Curso>('curso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }
  salvar() {
    this.banco.list('aluno').push(this.aluno);
    this.aluno = new Aluno();
    this.rota.navigate(['listar-aluno']);
  }

  ngOnInit() {
  }

}
