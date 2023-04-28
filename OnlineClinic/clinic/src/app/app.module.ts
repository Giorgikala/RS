import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './pages/mainpage/Registration/Registration.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { DoctorsDetailComponent } from './pages/mainpage/doctors-detail/doctors-detail.component';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CookieService } from 'ngx-cookie-service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';









@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    MainpageComponent,
    DoctorsDetailComponent,
    UserDetailComponent,
    DoctorRegistrationComponent,
    CalendarComponent,
    DoctorPageComponent,
    

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
    Ng2SearchPipeModule,
   



  
    
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
