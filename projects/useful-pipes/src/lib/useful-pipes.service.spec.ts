import { TestBed } from '@angular/core/testing';

import { UsefulPipesService } from './useful-pipes.service';

describe('UsefulPipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsefulPipesService = TestBed.get(UsefulPipesService);
    expect(service).toBeTruthy();
  });
});
