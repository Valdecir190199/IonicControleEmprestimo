import { Router } from '@angular/router';
import { Funcionario } from './../entidade/funcionario';
import { Component, OnInit } from '@angular/core';
//importaçoes
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-salvar-funcionario',
  templateUrl: './salvar-funcionario.page.html',
  styleUrls: ['./salvar-funcionario.page.scss'],
})
export class SalvarFuncionarioPage implements OnInit {
  funcionario: Funcionario = new Funcionario();
  constructor(private banco: AngularFireDatabase, private rota:Router) { }

  ngOnInit() {
  }

  salvar(){
    this.banco.list('funcionario').push(this.funcionario);
    this.funcionario = new Funcionario();
    this.rota.navigate(['funcionario-listar'])
    
    }

}
