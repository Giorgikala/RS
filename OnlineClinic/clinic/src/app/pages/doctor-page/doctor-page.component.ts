import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {
  doctor:any
  deletecookie(){
    
    this.cookie.delete("Token")
    this.route.navigate(['/mainpage'])
    
  }
  constructor(private http: HttpService, private route: Router,
    private cookie: CookieService) { }

  ngOnInit() {
    this.http.Getparameters().subscribe((resposne) =>{
      this.doctor = resposne
      console.log(this.doctor);
      
    })
   

   }
   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'ka',

    weekends: false,
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',

      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    events: [
      { title: 'დაჯავშნილია ', date: '2023-04-20' },
      { title: 'დაჯავშნილია ', date: '2023-04-19' },
    ],
  };
  eventsPromise: Promise<EventInput>;

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
  }


