import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogado } from './clientLogado.component';

describe('CreateAccountComponent', () => {
  let component: ClientLogado;
  let fixture: ComponentFixture<ClientLogado>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLogado ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLogado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
