import { MetaPaginate } from './../../model/meta-paginate';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
class Paginate {
  page: number;
  params: string;
  constructor(page: number, params: string) {
    this.page = page;
    this.params = params;
  }
}

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnChanges {

  @Input() metaPaginate: MetaPaginate;
  @Output() emitParams = new EventEmitter();
  pages: Paginate[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = [];
    for (let index = 0; index < this.metaPaginate.totalPages; index++) {
      let page = index + 1;
      this.pages.push(new Paginate(page, `limit=${this.metaPaginate.itemsPerPage}&page=${page}`))
    }
  }

  onEmitParams(params) {
    this.emitParams.emit(params);
  }

}
