import { Emprestimo } from './../entidade/emprestimo';
import { Material } from './../../material/entidade/material';
import { Aluno } from './../../aluno/entidade/aluno';
import { Funcionario } from './../../funcionario/entidade/funcionario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';



@Component({
  selector: 'app-salvar-emprestimo',
  templateUrl: './salvar-emprestimo.page.html',
  styleUrls: ['./salvar-emprestimo.page.scss'],
})
export class SalvarEmprestimoPage implements OnInit {
  emprestimo: Emprestimo = new Emprestimo();

  listaFuncionario: Observable<Funcionario[]>;
  listaAluno: Observable<Aluno[]>
  listaMaterial: Observable<Material[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaFuncionario = this.fire.list<Funcionario>('funcionario').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );

    this.listaAluno = this.fire.list<Aluno>('aluno').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );

    this.listaMaterial = this.fire.list<Material>('material').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  salvar(){
    this.fire.list('emprestimo').push(this.emprestimo);
    this.emprestimo = new Emprestimo();
    this.rota.navigate(['listar-emprestimo']);
    }

  ngOnInit() {
  }

}
