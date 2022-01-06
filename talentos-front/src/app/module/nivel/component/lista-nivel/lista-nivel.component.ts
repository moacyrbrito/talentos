import { Desenvolvedor } from './../../../../model/desenvolvedor';
import { MetaPaginate } from './../../../../model/meta-paginate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utils } from 'src/app/helper/utils';
import { Nivel } from 'src/app/model/nivel';
import { AlertService } from 'src/app/service/alert.service';
import { NivelService } from 'src/app/service/nivel.service';

@Component({
  selector: 'app-lista-nivel',
  templateUrl: './lista-nivel.component.html',
  styleUrls: ['./lista-nivel.component.scss']
})
export class ListaNivelComponent implements OnInit {

  niveis: Nivel[]
  waySort: string;
  fieldSortable: string;
  mensageWarning: string;
  metaPaginate: MetaPaginate;
  lastParams: string;

  constructor(
    private _nivelService: NivelService,
    private _router: Router,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.listarNivel();
  }

  async listarNivel(params = 'limit=10') {
    this.lastParams = params;
    try {
      let niveisBd = await this._nivelService.obter(params);
      this.niveis = niveisBd['items'];
      this.metaPaginate = Object.assign(niveisBd['meta']);
    } catch (e) {
      this.mensageWarning = "Não foi possível carregar os registros! Tente novamente mais tarde."
    }
  }

  onSort(index) {
    this.waySort = (this.waySort == "asc") ? "desc" : "asc";
    Utils.onSortUtil(this.niveis, index, this.waySort);
  }

  onInserir() {
    this._router.navigate(["nivel/inserir"]);
  }

  onAlterar(id) {
    this._router.navigate([`nivel/alterar/${id}`]);
  }

  async onExcluir(id: number) {
    await this._alertService.questionYesNo("Excluir", "Deseja excluir", () => this.excluirConfirm(id))
  }

  excluirConfirm(id: number) {
    this._nivelService.excluir(id).subscribe(() => {
      this.niveis = this.niveis.filter(nivel => nivel.id != id);
      this._alertService.alertStatus('success', 'Sucesso!', 'Registro removido com sucesso!!', 3000);
      this.listarNivel(this.lastParams);
    });
  }

  qtdDesenvolvedores(desenvolvedores: Desenvolvedor[]){
    return desenvolvedores.length;
  }
}
