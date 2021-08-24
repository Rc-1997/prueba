import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacomponenteprotectComponent } from './pruebacomponenteprotect.component';

describe('PruebacomponenteprotectComponent', () => {
  let component: PruebacomponenteprotectComponent;
  let fixture: ComponentFixture<PruebacomponenteprotectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebacomponenteprotectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebacomponenteprotectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
