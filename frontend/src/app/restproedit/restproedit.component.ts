import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-restproedit',
  templateUrl: './restproedit.component.html',
  styleUrls: ['./restproedit.component.css']
})
export class RestproeditComponent {

  
  responsedata: any;
  constructor(private http: HttpClient , private router : Router, private service : UserService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
  const  restaurid = localStorage.getItem('restaurid');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${restaurid}`);
  this.http.get('http://127.0.0.1:8000/api/restuserdata/', {headers}).subscribe((response: any) => {
    this.responsedata = response;
    console.log(this.responsedata);
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
    this.http.put('http://127.0.0.1:8000/api/restuserdata/', this.responsedata, {headers}).subscribe((response: any) => {
      this.responsedata = response;
      console.log(this.responsedata);
      alert("Data Updated");
      this.router.navigate(['/restprof']);
    });
  }

}
