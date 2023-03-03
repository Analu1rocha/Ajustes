import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDeRelatorioComponent } from './dados-de-relatorio.component';

describe('DadosDeRelatorioComponent', () => {
  let component: DadosDeRelatorioComponent;
  let fixture: ComponentFixture<DadosDeRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosDeRelatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDeRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
