import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @ViewChild(NavbarComponent) viewdata!: NavbarComponent;
  user: any;
  

  deletecookie(){
    
    this.cookieservice.delete("Token")
    this.route.navigate(['/mainpage'])
  }
  

  constructor(private http: HttpService, private route: Router, private cookieservice: CookieService) {}
  ngOnInit() {
    this.http.Getparameters().subscribe((resposne) =>{
      this.user = resposne
      console.log(this.user);
      
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
