import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDetalleComponent } from './nuevo-detalle.component';

describe('NuevoDetalleComponent', () => {
  let component: NuevoDetalleComponent;
  let fixture: ComponentFixture<NuevoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
