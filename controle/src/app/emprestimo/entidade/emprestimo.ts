import { Material } from './../../material/entidade/material';
import { Aluno } from './../../aluno/entidade/aluno';
import { Funcionario } from './../../funcionario/entidade/funcionario';
export class Emprestimo {
    funcionario: Funcionario;
    aluno: Aluno;
    material: Material;
    quantidade: number;
}
