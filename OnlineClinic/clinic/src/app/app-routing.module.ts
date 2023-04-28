import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RegistrationComponent } from './pages/mainpage/Registration/Registration.component';
import { DoctorsDetailComponent } from './pages/mainpage/doctors-detail/doctors-detail.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { DoctorPageComponent } from './pages/doctor-page/doctor-page.component';

const routes: Routes = [

  {path: 'mainpage', component: MainpageComponent},
  {path: 'registration', component: RegistrationComponent, },
  {path: 'detail/:id', component: DoctorsDetailComponent,  },
  {path: 'userdetail', component: UserDetailComponent},
  {path: 'doctorregistration', component: DoctorRegistrationComponent},
  {path: 'doctorpage', component: DoctorPageComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
