import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Globals } from '../globals';

@Injectable()
export class TicketOrderService {

  constructor(private http: HttpClient,private gl:Globals) { }

  /* Molomjamts - 02/04/2018
   sending request to express application to order new tickets.
   it will add new record to user's "userTickets" array which includes 
   ticket order information.
  */
  orderTicket(id,orderedTicket,loggedUser) {
      return this.http.put(this.gl.URL+'/order/' + id, {tickets:orderedTicket,user:loggedUser});
  }
}
