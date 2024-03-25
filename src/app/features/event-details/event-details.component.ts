import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../core/services/event.service';
import { DatePipe } from '@angular/common';
//import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {
  event: Event = new Event({});

//export class EventDetailsComponent implements OnInit {
 // eventForm: Event = new FormGroup({
 // id: new FormControl('', [Validators.required]),
  //  title: new FormControl('', [Validators.required]),
   // content: new FormControl('', [Validators.required]),
   // start_date_time: new FormControl('', [Validators.required]),
   // end_date_time: new FormControl('', [Validators.required]),created_at: new FormControl('', [Validators.required]),
   // sports: new FormControl('', [Validators.required]),
   // user: new FormControl('', [Validators.required]),
  //});

  constructor(private routes:ActivatedRoute, private eventService:EventService) {}

  ngOnInit(): void {
      this.routes.params.subscribe((params) =>{
        // console.log(params);
        this.eventService.getEvent(params['id']).subscribe({
          next: (event: Event) => {
          this.event = event;
          console.log('get event', this.event)
        },
        error: (error) => {
          console.log(error);
        },
        });
      });
  }
}
