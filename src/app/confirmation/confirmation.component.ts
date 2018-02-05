import { Component, OnInit } from '@angular/core';
import { ConfirmationServiceService } from '../services/confirmation-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  private orderedTicket;
  constructor(private confirmService:ConfirmationServiceService) { }

  /* Molomjamts- 02/05/2018
   getting ticket order detail from ticketOrder component
   using EventEmitter to show in confirmation page*/
  ngOnInit() {
    this.confirmService.pushedData.subscribe(data=>{
      this.orderedTicket = data;
    });
  }

}
