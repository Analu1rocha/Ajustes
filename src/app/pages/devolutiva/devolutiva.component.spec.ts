import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutivaComponent } from './devolutiva.component';

describe('DevolutivaComponent', () => {
  let component: DevolutivaComponent;
  let fixture: ComponentFixture<DevolutivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolutivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
