import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDaPropostaComponent } from './dados-da-proposta.component';

describe('DadosDaPropostaComponent', () => {
  let component: DadosDaPropostaComponent;
  let fixture: ComponentFixture<DadosDaPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosDaPropostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDaPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
