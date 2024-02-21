import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { NgologinComponent } from '../ngologin/ngologin.component';
import { Router } from '@angular/router';
import { NgoproComponent } from '../ngopro/ngopro.component';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../app.service';
@Component({
  selector: 'app-ngoproedit',
  templateUrl: './ngoproedit.component.html',
  styleUrls: ['./ngoproedit.component.css']
})
export class NgoproeditComponent {
  
  responsedatango: any;
  constructor(private http: HttpClient, private router : Router , private service : UserService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
  const  restaurid = localStorage.getItem('restaurid');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${restaurid}`);
  this.http.get('http://127.0.0.1:8000/api/ngodeata/', {headers}).subscribe((response: any) => {
    this.responsedatango = response;
    console.log(this.responsedatango);
  },
  
  (error: any) => {
    if (error.status == 401){
      alert("Invalid Credentials");
    } 
    else if (error.status == 404){
      alert("User not found");
    }
    else{
      alert("Server Error");
    }

  });


  
  
}


update(){
  const  restaurid = localStorage.getItem('restaurid');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${restaurid}`);
  this.http.put('http://127.0.0.1:8000/api/restuserdata/', this.responsedatango, {headers}).subscribe((response: any) => {
    this.responsedatango = response;
    console.log(this.responsedatango);
    alert("Data Updated");
    this.router.navigate(['/NGO-Profile']);
  });
}

}
  