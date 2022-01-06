import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAlterarDeveloperComponent } from './inserir-alterar-developer.component';

describe('InserirAlterarDeveloperComponent', () => {
  let component: InserirAlterarDeveloperComponent;
  let fixture: ComponentFixture<InserirAlterarDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirAlterarDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirAlterarDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
