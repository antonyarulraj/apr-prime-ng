import { TestBed } from '@angular/core/testing';

import { PrimeIntlTelInputService } from './prime-intl-tel-input.service';

describe('PrimeIntlTelInputService', () => {
  let service: PrimeIntlTelInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeIntlTelInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
