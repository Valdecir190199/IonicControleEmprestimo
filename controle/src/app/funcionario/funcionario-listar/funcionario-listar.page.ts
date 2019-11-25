import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Funcionario } from './../entidade/funcionario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.page.html',
  styleUrls: ['./funcionario-listar.page.scss'],
})
export class FuncionarioListarPage implements OnInit {

  listaFuncionarios: Observable<Funcionario[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaFuncionarios = this.fire.list<Funcionario>('funcionario').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))

    );
  }


  ngOnInit() {
  }

}
