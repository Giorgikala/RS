import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {
  constructor(private http : HttpService, private route: Router, private ht: HttpClient) { }
  ngOnInit(): void {
    
  }

  form = new FormGroup({
    Firstname: new FormControl('', Validators.required),
    Lastname: new FormControl('', Validators.required),
    Photo: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Cv: new FormControl('', Validators.required),
    Category: new FormControl('', Validators.required),
    Personalid: new FormControl('', Validators.required)

  })

  sumbit(){

    const form = new FormData();
    form.append('Firstname', this.form.get('Firstname').value);
    form.append('Lastname', this.form.get('Lastname').value);
    form.append('Photo', this.form.get('Photo').value);
    form.append('Email', this.form.get('Email').value);
    form.append('Password', this.form.get('Password').value);
    form.append('Cv', this.form.get('Cv').value);
    form.append('Category', this.form.get('Category').value);
    form.append('Personalid', this.form.get('Personalid').value);

    this.ht.post('https://localhost:7067/api/Doctors',form,
    {headers: new HttpHeaders({'Content-Type': 'multipart/form-data,'})}
    ) 
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
      console.log(this.form);
      
  }
  // registerDoctor(){

   
  //   this.http.RegisterDoctor({
  //     FirstName: this.form.controls.FirstName.value,
  //     Lastname: this.form.controls.Lastname.value,
  //     Photo: this.form.controls.Photo.value,
  //     Email: this.form.controls.Email.value,
  //     Cv: this.form.controls.Cv.value,
  //     Personalid: this.form.controls.Personalid.value,
  //     Password: this.form.controls.Password.value,
  //     Category: this.form.controls.Category.value,
  //   }
   
    
  //   ).subscribe((response: any) => {
     
      
  //     console.log(response);
  //     alert('წარმატებით გაიარეთ ექიმის რეგისტრაცია');
  //     this.route.navigate(['mainpage']);
      

  // });
  
  
  
  
  }

 

