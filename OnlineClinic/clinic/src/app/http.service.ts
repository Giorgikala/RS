import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  
  constructor(private http: HttpClient) { 
    
  }
  RegisterDoctor(RegisterDoctors){
    return this.http.post('https://localhost:7067/api/Doctors', RegisterDoctors, 
      {headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})})
    }
  


  RegisterUser(data: any){
    return this.http.post('https://localhost:7067/api/Auth/register', data )
  }
  SentCode(addressMail: string){
    return this.http.post(`https://localhost:7067/api/Auth/SentCode?addressMail=${addressMail}`, {
 })
  }

  GetAllDoctors(){
    return this.http.get('https://localhost:7067/api/Doctors')
  }
  GetDoctorId(id: any){
    return this.http.get('https://localhost:7067/api/Doctors/'+ id, 
    { headers:new HttpHeaders({
      "Authorization": 'Bearer ' + document.cookie.split(';').
      find(cookie =>
        cookie.startsWith("Token="))
        ?.split('=')[1]
    })})
  }
Login(email: any | null, password: any | null){
  const rs = {email: email, password: password};

  
  return this.http.post('https://localhost:7067/api/Auth/login', rs,)
}

Getparameters(){
  return this.http.get('https://localhost:7067/api/Auth/GetParameters',
  { headers:new HttpHeaders({
    "Authorization": 'Bearer ' + document.cookie.split(';').
    find(cookie =>
      cookie.startsWith("Token="))
      ?.split('=')[1]
  })})
}
  
}
