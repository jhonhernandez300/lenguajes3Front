import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDetalleComponent } from './eliminar-detalle.component';

describe('EliminarDetalleComponent', () => {
  let component: EliminarDetalleComponent;
  let fixture: ComponentFixture<EliminarDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
