import { TestBed, inject } from '@angular/core/testing';

import { AplicacaoService } from './aplicacao.service';

describe('AplicacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AplicacaoService]
    });
  });

  it('should be created', inject([AplicacaoService], (service: AplicacaoService) => {
    expect(service).toBeTruthy();
  }));
});
