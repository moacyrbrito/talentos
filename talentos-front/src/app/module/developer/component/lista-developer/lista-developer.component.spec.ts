import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeveloperComponent } from './lista-developer.component';

describe('ListaDeveloperComponent', () => {
  let component: ListaDeveloperComponent;
  let fixture: ComponentFixture<ListaDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
