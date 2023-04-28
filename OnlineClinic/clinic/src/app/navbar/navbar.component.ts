import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserInterface } from '../userInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private _isLoggedin$ = new BehaviorSubject<boolean>(false);
  isLoggedin = this._isLoggedin$.asObservable();

  private _header$ = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private primengConfig: PrimeNGConfig,
    private http: HttpService,
    private route: Router,
  
  ) {}
  loggedIn: boolean = false;

  displayPosition: any | undefined;
  position: any;
  user: any;
  

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  Login() {
    this.http
      .Login(this.form.controls.email.value, this.form.controls.password.value)
      .subscribe((response: any) => {
        document.cookie = 'Token =' + response.token.myToken + ';';
        if (response.user) {
          this.route.navigate(['/userdetail']);
           this.loggedIn = true
           this.user = response

          console.log(this.user);
        

          alert('You Succefully Loged');
        } else {
          this.route.navigate(['/doctorpage']);
          this.loggedIn = true
        }
      });
  }
 

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}
