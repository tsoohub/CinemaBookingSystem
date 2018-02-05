import { TestBed, inject } from '@angular/core/testing';

import { TicketOrderService } from './ticket-order.service';

describe('TicketOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketOrderService]
    });
  });

  it('should be created', inject([TicketOrderService], (service: TicketOrderService) => {
    expect(service).toBeTruthy();
  }));
});
