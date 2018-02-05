import { TestBed, inject } from '@angular/core/testing';

import { ConfirmationServiceService } from './confirmation-service.service';

describe('ConfirmationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmationServiceService]
    });
  });

  it('should be created', inject([ConfirmationServiceService], (service: ConfirmationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
