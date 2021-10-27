import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSolucoesComponent } from './cliente-solucoes.component';

describe('ClienteSolucoesComponent', () => {
  let component: ClienteSolucoesComponent;
  let fixture: ComponentFixture<ClienteSolucoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSolucoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
