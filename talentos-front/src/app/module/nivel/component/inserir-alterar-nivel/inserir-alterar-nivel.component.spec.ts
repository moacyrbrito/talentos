import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAlterarNivelComponent } from './inserir-alterar-nivel.component';

describe('InserirAlterarNivelComponent', () => {
  let component: InserirAlterarNivelComponent;
  let fixture: ComponentFixture<InserirAlterarNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirAlterarNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirAlterarNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
