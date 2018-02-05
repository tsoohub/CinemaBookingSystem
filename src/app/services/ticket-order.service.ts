import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class TicketOrderService {

  constructor(private http: HttpClient) { }

  orderTicket(id,orderedTicket,loggedUser) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: header });
      return this.http.put('http://localhost:3000/order/' + id, {tickets:orderedTicket,user:loggedUser});
  }
}
