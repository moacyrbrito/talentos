import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { ListaDeveloperComponent } from './component/lista-developer/lista-developer.component';
import { InserirAlterarDeveloperComponent } from './component/inserir-alterar-developer/inserir-alterar-developer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaDeveloperComponent, InserirAlterarDeveloperComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DeveloperModule { }
