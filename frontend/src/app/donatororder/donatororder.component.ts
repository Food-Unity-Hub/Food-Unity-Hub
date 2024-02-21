import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-donatororder',
  templateUrl: './donatororder.component.html',
  styleUrls: ['./donatororder.component.css']
})
export class DonatororderComponent {
  
  
  responsedatdon: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
  const  donatorid = localStorage.getItem('donatorid');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${donatorid}`);
  this.http.get('http://127.0.0.1:8000/api/ngodeata/', {headers}).subscribe((response: any) => {
    this.responsedatdon = response;
    console.log(this.responsedatdon);
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
