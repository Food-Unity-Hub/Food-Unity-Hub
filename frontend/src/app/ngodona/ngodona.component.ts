import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { NgologinComponent } from '../ngologin/ngologin.component';
@Component({
  selector: 'app-ngodona',
  templateUrl: './ngodona.component.html',
  styleUrls: ['./ngodona.component.css']
})
export class NgodonaComponent {

  
  responsedatango: any;
  constructor(private http: HttpClient) { }

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


}
