import { AlertService } from 'src/app/service/alert.service';
import { NivelService } from './../../../../service/nivel.service';
import { Nivel } from './../../../../model/nivel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserir-alterar-nivel',
  templateUrl: './inserir-alterar-nivel.component.html',
  styleUrls: ['./inserir-alterar-nivel.component.scss']
})
export class InserirAlterarNivelComponent implements OnInit {
  submitted: boolean;
  formulario: FormGroup;
  nivel: Nivel;

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _nivelService: NivelService,
    private _router: Router,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.initForm();
    this._activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this._nivelService.obterPorId(id).subscribe((nivel: Nivel) => {
          this.nivel = nivel;
          this.formulario.patchValue(this.nivel);
        }, () => {
          this._alertService.alertStatus('warning', 'Aviso!', 'Não foi possível localizar o registro! Tente novamente mais tarde', 2000);
        })
      } else {
        this.nivel = new Nivel(0, "");
        this.formulario.patchValue(this.nivel);
      }
    });
  }

  async initForm() {
    this.formulario = new FormGroup({})
    this.formulario = this._formBuilder.group({
      id: [0],
      nivel: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      this.nivel = this.formulario.value;
      (this.nivel.id > 0) ? this.alterar() : this.inserir();
    } else {
      this._alertService.alertStatus('warning', 'Aviso!', 'Revise e preencha os dados obrigatórios!', 3000);
    }
  }

  inserir() {
    this._nivelService.inserir(this.nivel).subscribe(
      () => {
        this._alertService.alertStatus('success', 'Sucesso!', 'Dados inseridos com sucesso!!', 4000);
        this._router.navigate(["nivel"]);
      },
      () => {
        this._alertService.alertStatus('warning', 'Aviso!', 'Não foi possível realizar a operação!', 4000);
      }
    )
  }

  alterar() {
    this._nivelService.alterar(this.nivel).subscribe(
      () => {
        this._alertService.alertStatus('success', 'Sucesso!', 'Dados alterados com sucesso!!', 4000);
        this._router.navigate(["nivel"]);
      },
      () => {
        this._alertService.alertStatus('warning', 'Aviso!', 'Não foi possível realizar a operação!', 4000);
      }
    )
  }

  onCancel() {
    this._router.navigate(["nivel"]);
  }

}
