import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'salvar-material',
    loadChildren: () => import('./material/salvar-materia/salvar-materia.module').then( m => m.SalvarMateriaPageModule)
  },
  {
    path: 'materia-listar',
    loadChildren: () => import('./material/materia-listar/materia-listar.module').then( m => m.MateriaListarPageModule)
  },
  {
    path: 'salvar-curso',
    loadChildren: () => import('./curso/salvar-curso/salvar-curso.module').then( m => m.SalvarCursoPageModule)
  },
  {
    path: 'curso-listar',
    loadChildren: () => import('./curso/curso-listar/curso-listar.module').then( m => m.CursoListarPageModule)
  },
  {
    path: 'salvar-aluno',
    loadChildren: () => import('./aluno/salvar/salvar.module').then( m => m.SalvarPageModule)
  },
  {
    path: 'listar-aluno',
    loadChildren: () => import('./aluno/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'salvar-funcionario',
    loadChildren: () => import('./funcionario/salvar-funcionario/salvar-funcionario.module').then( m => m.SalvarFuncionarioPageModule)
  },
  {
    path: 'funcionario-listar',
    loadChildren: () => import('./funcionario/funcionario-listar/funcionario-listar.module').then( m => m.FuncionarioListarPageModule)
  },
  {
    path: 'salvar-emprestimo',
    loadChildren: () => import('./emprestimo/salvar-emprestimo/salvar-emprestimo.module').then( m => m.SalvarEmprestimoPageModule)
  },
  {
    path: 'listar-emprestimo',
    loadChildren: () => import('./emprestimo/listar-emprestimo/listar-emprestimo.module').then( m => m.ListarEmprestimoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
