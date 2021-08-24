import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTelefonoComponent } from './delete-telefono.component';

describe('DeleteTelefonoComponent', () => {
  let component: DeleteTelefonoComponent;
  let fixture: ComponentFixture<DeleteTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
