import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }

  alertStatus(status = '', titulo: string = '', texto: string = '', timer: number = 5000) {
    switch(status){
      case "success":
        this.toastr.success(texto, titulo, {timeOut: timer, positionClass:"toast-bottom-right"});
        break;
      case "warning":
          this.toastr.warning(texto, titulo, {timeOut: timer, positionClass:"toast-bottom-right"});
          break;
      case "error":
        this.toastr.error(texto, titulo, {timeOut: timer, positionClass:"toast-bottom-right"});
        break;
      default:
        this.toastr.info(texto, titulo, {timeOut: timer, positionClass:"toast-bottom-right"});
        break;
    }
  }

  questionYesNo(titulo: string, mensagem: string, callbackConfirmYes?, callbackConfirmNo?) {
    Swal({
      title: titulo,
      text: mensagem,
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        callbackConfirmYes();
      } else {
        callbackConfirmNo();
      }
    });
  }
}
