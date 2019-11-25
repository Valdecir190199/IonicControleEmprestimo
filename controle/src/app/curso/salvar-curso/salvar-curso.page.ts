import { Router } from '@angular/router';
import { Curso } from './../entidade/curso';
import { Component, OnInit } from '@angular/core';

//Criar referencia do firebase no ts
import { AngularFireDatabase } from "@angular/fire/database";



@Component({
  selector: 'app-salvar-curso',
  templateUrl: './salvar-curso.page.html',
  styleUrls: ['./salvar-curso.page.scss'],
})
export class SalvarCursoPage implements OnInit {

  curso:Curso = new Curso();

  //Coloque a referência do firebase no construtor
  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }
salvar(){
  this.banco.list('curso').push(this.curso);
  this.curso = new Curso();
  this.rota.navigate(['curso-listar']);

  }
}


