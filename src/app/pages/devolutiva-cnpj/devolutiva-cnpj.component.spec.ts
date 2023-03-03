import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutivaCnpjComponent } from './devolutiva-cnpj.component';

describe('DevolutivaCnpjComponent', () => {
  let component: DevolutivaCnpjComponent;
  let fixture: ComponentFixture<DevolutivaCnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolutivaCnpjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolutivaCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
