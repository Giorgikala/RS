import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  searchDoctor: any;
 AllDoctors : any;
 img: any = this.route.snapshot.paramMap.get("id") 
  constructor(private http : HttpService, private route : ActivatedRoute) { }
 
  

 count = 0;


 
 ngOnInit() {
   
   this.http.GetAllDoctors().subscribe((response: any) =>{
     this.AllDoctors = response
     
    })
   
    
   
    
    
  }
 
}


