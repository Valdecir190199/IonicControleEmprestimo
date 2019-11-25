import { Emprestimo } from './../entidade/emprestimo';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar-emprestimo',
  templateUrl: './listar-emprestimo.page.html',
  styleUrls: ['./listar-emprestimo.page.scss'],
})
export class ListarEmprestimoPage implements OnInit {
  listaEmprestimo: Observable<Emprestimo[]>;
  constructor(private fire:AngularFireDatabase) {
    this.listaEmprestimo = this.fire.list<Emprestimo>('emprestimo').snapshotChanges().pipe(

      map( lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val()
      }) ) )
      
      );
   }

  ngOnInit() {
  }

}
