import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDevolutivaComponent } from './dados-devolutiva.component';

describe('DadosDevolutivaComponent', () => {
  let component: DadosDevolutivaComponent;
  let fixture: ComponentFixture<DadosDevolutivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosDevolutivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDevolutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
