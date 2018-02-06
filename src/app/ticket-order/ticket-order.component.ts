import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketOrderService } from '../services/ticket-order.service';
import { MovieServiceService } from '../services/movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmationServiceService } from '../services/confirmation-service.service';
import { Router } from '@angular/router';
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
  totalSeat: Number
}
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
  constructor(fb: FormBuilder, private order: TicketOrderService,
    private movieService: MovieServiceService, private activeRoute: ActivatedRoute,
    private confrimService: ConfirmationServiceService,
    private router: Router) {
    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = params['movieId'];
      console.log('movieId in constructor:' + this.id);
      movieService.getMovieById(this.id).subscribe(res => {
        this.movie = JSON.parse(JSON.stringify(res));
        console.log('movieObject', this.movie);
        console.log('shceduleObject:');
      });

    });


    this.ticketOrderForm = fb.group({
      'time': ['', [Validators.required]],
      'adultCount': ['', [Validators.required, Validators.min(0), Validators.max(40)]],
      'childrenCount': ['', [Validators.required, Validators.min(0), Validators.max(40)]],
    });
  }

  ngOnInit() {
    console.log('calling ticketOrder');
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
    // loggedUser.userTickets.push(this.ticketOrderForm.value);
    var orderedTickets = this.ticketOrderForm.value;
    orderedTickets.movieId = this.movie._id;
    console.log('userLogged', loggedUser);
    console.log('orderedTickets', orderedTickets);
    this.order.orderTicket(this.id, orderedTickets, loggedUser).subscribe(res => {
      console.log(res);
      this.confrimService.pushData(orderedTickets);
    });
    this.router.navigateByUrl('/movie/ticketConfirmation');

  }

  onChange(value) {
    console.log('schedule=' + this.movie.schedule.filter(x => x.startTime === value));
    this.curSchedule = this.movie.schedule.filter(x => x.startTime === value)[0];
    console.log('selectedValue:', value);
    console.log('curSchedule:', this.curSchedule);
  }
}
