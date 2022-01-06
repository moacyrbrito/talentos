import { CommonModule } from '@angular/common';
import { PaginateComponent } from './../component/paginate/paginate.component';
import { NgModule } from "@angular/core";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PaginateComponent
  ],
  declarations: [
    PaginateComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
