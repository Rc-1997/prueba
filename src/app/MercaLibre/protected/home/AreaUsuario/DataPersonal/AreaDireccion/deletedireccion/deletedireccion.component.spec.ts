import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedireccionComponent } from './deletedireccion.component';

describe('DeletedireccionComponent', () => {
  let component: DeletedireccionComponent;
  let fixture: ComponentFixture<DeletedireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
