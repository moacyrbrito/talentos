import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNivelComponent } from './lista-nivel.component';

describe('ListaNivelComponent', () => {
  let component: ListaNivelComponent;
  let fixture: ComponentFixture<ListaNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
