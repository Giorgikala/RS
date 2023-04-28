import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-doctors-detail',
  templateUrl: './doctors-detail.component.html',
  styleUrls: ['./doctors-detail.component.css'],
})
export class DoctorsDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private htpp: HttpService) {}

  id: any;
  Doctordetail: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.GetDoctorById(this.id);
  }
  GetDoctorById(id: any) {
    this.htpp.GetDoctorId(id).subscribe((res) => {
      this.Doctordetail = res;
      console.log();
    });
  }
}
