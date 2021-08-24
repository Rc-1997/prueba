import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTelefonoComponent } from './crear-telefono.component';

describe('CrearTelefonoComponent', () => {
  let component: CrearTelefonoComponent;
  let fixture: ComponentFixture<CrearTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
