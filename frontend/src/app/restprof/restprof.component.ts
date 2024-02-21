import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
@Component({
  selector: 'app-restprof',
  templateUrl: './restprof.component.html',
  styleUrls: ['./restprof.component.css']
})
export class RestprofComponent {

  
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

}
