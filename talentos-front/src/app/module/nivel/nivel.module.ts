import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { ListaNivelComponent } from './component/lista-nivel/lista-nivel.component';
import { InserirAlterarNivelComponent } from './component/inserir-alterar-nivel/inserir-alterar-nivel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaNivelComponent, InserirAlterarNivelComponent],
  imports: [
    CommonModule,
    NivelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NivelModule { }
