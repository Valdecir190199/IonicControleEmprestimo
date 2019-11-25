import { Component, OnInit } from '@angular/core';

//Importações
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../entidade/curso';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.page.html',
  styleUrls: ['./curso-listar.page.scss'],
})
export class CursoListarPage implements OnInit {

  //Observable
  listaCursos: Observable<Curso[]>;


  constructor(private fire: AngularFireDatabase) {

    this.listaCursos = this.fire.list<Curso>('curso').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))

    );

  }

  ngOnInit() {
  }

}
