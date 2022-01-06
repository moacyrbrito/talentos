import { InserirAlterarDeveloperComponent } from './component/inserir-alterar-developer/inserir-alterar-developer.component';
import { ListaDeveloperComponent } from './component/lista-developer/lista-developer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListaDeveloperComponent
  },
  {
    path:'inserir',
    component: InserirAlterarDeveloperComponent
  },
  {
    path:'alterar/:id',
    component: InserirAlterarDeveloperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
