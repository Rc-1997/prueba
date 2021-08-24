import { TestBed } from '@angular/core/testing';

import { PruebaResolver } from './prueba.resolver';

describe('PruebaResolver', () => {
  let resolver: PruebaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PruebaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
