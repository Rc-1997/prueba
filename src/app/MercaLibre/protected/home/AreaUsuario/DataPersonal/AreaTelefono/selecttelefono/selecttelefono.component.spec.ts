import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttelefonoComponent } from './selecttelefono.component';

describe('SelecttelefonoComponent', () => {
  let component: SelecttelefonoComponent;
  let fixture: ComponentFixture<SelecttelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecttelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
