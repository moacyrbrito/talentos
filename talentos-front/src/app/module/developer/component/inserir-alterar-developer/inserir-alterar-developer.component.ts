import { Nivel } from './../../../../model/nivel';
import { NivelService } from './../../../../service/nivel.service';
import { TipoSexo } from './../../../../enum/tipo-sexo.enum';
import { AlertService } from 'src/app/service/alert.service';
import { DesenvolvedorService } from './../../../../service/desenvolvedor.service';
import { Desenvolvedor } from './../../../../model/desenvolvedor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-alterar-developer',
  templateUrl: './inserir-alterar-developer.component.html',
  styleUrls: ['./inserir-alterar-developer.component.scss']
})
export class InserirAlterarDeveloperComponent implements OnInit {

  submitted: boolean;
  formulario: FormGroup;
  desenvolvedor: Desenvolvedor;
  niveis: Nivel[] = [];
  get tipoSexo() {
    return TipoSexo;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _desenvolvedorService: DesenvolvedorService,
    private _nivelService: NivelService,
    private _router: Router,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.initForm();
    this._activatedRoute.params.subscribe(async params => {
      const id = params['id'];
      if (id) {
        this._desenvolvedorService.obterPorId(id).subscribe((desenvolvedor: Desenvolvedor) => {
          this.desenvolvedor = desenvolvedor;
          this.formulario.patchValue(this.desenvolvedor);
          console.log(this.desenvolvedor);
          this.formulario.controls.nivel.setValue(this.desenvolvedor.nivel.id);
        }, () => {
          this._alertService.alertStatus('warning', 'Aviso!', 'Não foi possível localizar o registro! Tente novamente mais tarde', 2000);
        })
      } else {
        this.desenvolvedor = new Desenvolvedor(0);
        this.formulario.patchValue(this.desenvolvedor);
      }
      let nivelBd = await this._nivelService.obter();
      this.niveis = nivelBd['items'];
    });
  }

  async initForm() {
    this.formulario = new FormGroup({})
    this.formulario = this._formBuilder.group({
      id: [0],
      nivel: [0, Validators.required],
      nome: ["", Validators.required],
      sexo: [null],
      datanascimento: [null, Validators.required],
      hobby: [null, Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      this.desenvolvedor = this.formulario.value;
      (this.desenvolvedor.id > 0) ? this.alterar() : this.inserir();
    } else {
      this._alertService.alertStatus('warning', 'Aviso!', 'Revise e preencha os dados obrigatórios!', 3000);
    }
  }

  inserir() {
    this._desenvolvedorService.inserir(this.desenvolvedor).subscribe(
      () => {
        this._alertService.alertStatus('success', 'Sucesso!', 'Dados inseridos com sucesso!!', 4000);
        this._router.navigate(["desenvolvedor"]);
      },
      () => {
        this._alertService.alertStatus('warning', 'Aviso!', 'Não foi possível realizar a operação!', 4000);
      }
    )
  }

  alterar() {
    this._desenvolvedorService.alterar(this.desenvolvedor).subscribe(
      () => {
        this._alertService.alertStatus('success', 'Sucesso!', 'Dados alterados com sucesso!!', 4000);
        this._router.navigate(["desenvolvedor"]);
      },
      () => {
        this._alertService.alertStatus('warning', 'Aviso!', 'Não foi possível realizar a operação!', 4000);
      }
    )
  }

  onCancel() {
    this._router.navigate(["desenvolvedor"]);
  }
}
