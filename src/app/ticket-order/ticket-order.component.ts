import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketOrderService } from '../services/ticket-order.service';
import { MovieServiceService } from '../services/movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmationServiceService } from '../services/confirmation-service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
export interface Movie {
  _id: String,
  name: String,
  decs: String,
  genre: String,
  release: String,
  img: String,
  actors: String[],
  directors: String[],
  prices: {
    adult: Number,
    child: Number,
  },
  schedule: [{
    _id: String,
    startTime: String,
    totalSeat: Number,
  }]
}
export interface Schedule {

  _id: String,
  startTime: String,
  totalSeat: any
}

/** Molomjamts - 02/04/2018
 *  Ticket order form. User can order ticket by select movie time and puting the number of tickets
 * for each type(adult and children) 
 */
@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})

export class TicketOrderComponent implements OnInit {

  ticketOrderForm: FormGroup;
  id: string;
  private sub: Subscription;
  movie: Movie;
  curSchedule: Schedule;
  totalSeat: any = 1;
  adultSeat: any = 0;
  childrenSeat: any = 0;
  constructor(fb: FormBuilder, private order: TicketOrderService,
    private movieService: MovieServiceService, private activeRoute: ActivatedRoute,
    private confrimService: ConfirmationServiceService,
    private router: Router) {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = params['movieId'];
      console.log('movieId in constructor:' + this.id);
      movieService.getMovieById(this.id).subscribe(res => {
        this.movie = JSON.parse(JSON.stringify(res));
        this.curSchedule = this.movie.schedule[0];
        console.log('movieObject', this.movie);
        console.log('shceduleObject:');
      });

      this.ticketOrderForm = fb.group({
        'time': ['', [Validators.required]],
        'adultCount': ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
        'childrenCount': ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      });

    });


    /*Molomjamts - 02/06/2018
     listening the form  input values of ticket 
     counts to show available seat count real time
    */
    this.ticketOrderForm.controls['adultCount'].valueChanges.subscribe(
      (data: any) => {
        console.log(data);
        this.adultSeat = data;
        this.totalSeat = this.curSchedule.totalSeat - this.adultSeat - this.childrenSeat;

        console.log(this.curSchedule.totalSeat - data)
      }
    );
    this.ticketOrderForm.controls['childrenCount'].valueChanges.subscribe(
      (data: any) => {
        console.log(data);
        this.childrenSeat = data;
        this.totalSeat = this.curSchedule.totalSeat - this.adultSeat - this.childrenSeat;

        console.log(this.curSchedule.totalSeat - data)
      }
    );
  }

  ngOnInit() {

  }

  /* Molomjamts --
  Ordering ticket. Reading logged user from localstorage to loggedUser,
  taking ticket order detail in the orderedTickets variable.
   passing movieId, orderedTicket and loggedUser
  to orderTicket function in the ticketOrderService. If order is success,
  orderedTicket will be passed to confirmation component
   
  */
  onSubmit() {
    console.log('value:', this.ticketOrderForm.value);
    var loggedUser = JSON.parse(localStorage.getItem('user'));
    var orderedTickets = this.ticketOrderForm.value;
    orderedTickets.movieId = this.movie._id;
    console.log('userLogged', this.totalSeat);
    console.log('orderedTickets', this.adultSeat + this.childrenSeat);
    if (this.checkSeat()) {
      this.order.orderTicket(this.id, orderedTickets, loggedUser).subscribe(res => {
        console.log(res);
        this.confrimService.pushData(orderedTickets);
      });
      this.router.navigateByUrl('/movie/ticketConfirmation');
    }
  }

  /* Molomjamts -02/06/2018 
  when select time, it will update the available seat at the time */
  onChange() {
    this.curSchedule = this.movie.schedule.filter(x => x.startTime === this.ticketOrderForm.value.time)[0];
    this.totalSeat = this.curSchedule.totalSeat;
    this.ticketOrderForm.controls['adultCount'].reset();
    this.ticketOrderForm.controls['childrenCount'].reset();
    this.adultSeat = 0;
    this.childrenSeat = 0;
  }

  /* Molomjamts -02/06/2018 
   It will check if the ordered seat is exceeded number of available seat 
  */
  checkSeat() {
    if (parseInt(this.curSchedule.totalSeat) >= parseInt(this.adultSeat) + parseInt(this.childrenSeat)) {
      return true;
    } else {
      console.log('total',parseInt(this.totalSeat) );
      console.log('ddddddd',parseInt(this.adultSeat) + parseInt(this.childrenSeat));
      return false; }

  }
}
