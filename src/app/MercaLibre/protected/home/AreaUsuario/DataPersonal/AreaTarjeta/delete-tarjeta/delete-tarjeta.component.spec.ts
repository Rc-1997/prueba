import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTarjetaComponent } from './delete-tarjeta.component';

describe('DeleteTarjetaComponent', () => {
  let component: DeleteTarjetaComponent;
  let fixture: ComponentFixture<DeleteTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
