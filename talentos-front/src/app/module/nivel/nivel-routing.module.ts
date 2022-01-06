import { InserirAlterarNivelComponent } from './component/inserir-alterar-nivel/inserir-alterar-nivel.component';
import { ListaNivelComponent } from './component/lista-nivel/lista-nivel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListaNivelComponent
  },
  {
    path:'inserir',
    component: InserirAlterarNivelComponent
  },
  {
    path:'alterar/:id',
    component: InserirAlterarNivelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelRoutingModule { }
