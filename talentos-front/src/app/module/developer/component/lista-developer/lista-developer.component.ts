import { DesenvolvedorService } from './../../../../service/desenvolvedor.service';
import { Utils } from './../../../../helper/utils';
import { AlertService } from 'src/app/service/alert.service';
import { MetaPaginate } from './../../../../model/meta-paginate';
import { Desenvolvedor } from './../../../../model/desenvolvedor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-developer',
  templateUrl: './lista-developer.component.html',
  styleUrls: ['./lista-developer.component.scss']
})
export class ListaDeveloperComponent implements OnInit {

  desenvolvedores: Desenvolvedor[]
  waySort: string;
  fieldSortable: string;
  mensageWarning: string;
  metaPaginate: MetaPaginate;
  lastParams: string;
  filter: string;

  constructor(
    private _desenvolvedorService: DesenvolvedorService,
    private _router: Router,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.listarDesenvolvedor();
  }

  async listarDesenvolvedor(params = 'limit=10') {
    this.lastParams = params;
    try {
      let desenvolvedoresBd = await this._desenvolvedorService.obter(this.lastParams);
      this.desenvolvedores = desenvolvedoresBd['items'];
      this.metaPaginate = Object.assign(desenvolvedoresBd['meta']);
    } catch (e) {
      this.mensageWarning = "Não foi possível carregar os registros! Tente novamente mais tarde."
    }
  }

  onSort(index) {
    this.waySort = (this.waySort == "asc") ? "desc" : "asc";
    Utils.onSortUtil(this.desenvolvedores, index, this.waySort);
  }

  onInserir() {
    this._router.navigate(["desenvolvedor/inserir"]);
  }

  onAlterar(id) {
    this._router.navigate([`desenvolvedor/alterar/${id}`]);
  }

  async onExcluir(id: number) {
    await this._alertService.questionYesNo("Excluir", "Deseja excluir", () => this.excluirConfirm(id))
  }

  excluirConfirm(id: number) {
    this._desenvolvedorService.excluir(id).subscribe(() => {
      this.desenvolvedores = this.desenvolvedores.filter(desenvolvedor => desenvolvedor.id != id);
      this._alertService.alertStatus('success', 'Sucesso!', 'Registro removido com sucesso!!', 3000);
      this.listarDesenvolvedor(this.lastParams);
    }
    );
  }

  onFilter(){
    this.lastParams = `limit=10&busca=${this.filter}`
    this.listarDesenvolvedor(this.lastParams)
  }

}
