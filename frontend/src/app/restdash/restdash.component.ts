import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestloginComponent } from '../restlogin/restlogin.component';
@Component({
  selector: 'app-restdash',
  templateUrl: './restdash.component.html',
  styleUrls: ['./restdash.component.css']
})
export class RestdashComponent {

  responsedata: any;
  constructor(private http: HttpClient) { }

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



