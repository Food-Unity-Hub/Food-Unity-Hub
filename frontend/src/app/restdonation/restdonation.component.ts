import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { NgologinComponent } from '../ngologin/ngologin.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
import { User } from '../User';
@Component({
  selector: 'app-restdonation',
  templateUrl: './restdonation.component.html',
  styleUrls: ['./restdonation.component.css']
})
export class RestdonationComponent {
  
  responsedata: any;
  constructor(private http: HttpClient, private router : Router, private service : UserService) { }
  restaurid : any = '';
  ngOnInit(): void {
   this.getdata();
  }
  
  getdata(){
  const  restaurid = localStorage.getItem('restaurid');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${restaurid}`);
  this.http.get('http://127.0.0.1:8000/api/restuserdata/', {headers}).subscribe((response: any) => {
    this.responsedata = response;
  //  this.restid = this.responsedata.restaurid;
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

list: number[] = [];

donationidger() {
  const prefix = '45';
  const length = 4;
  const postfix = '24';
  let random = Math.floor(Math.random() * 10000);
  while (this.list.includes(random)) {
    random = Math.floor(Math.random() * 1000000);
  }
  
  
  this.list.push(random);
  const result = prefix + random.toString().padStart(length, '0') + postfix;
  return result;
}

data: any;

form = new FormGroup({
  donationid : new FormControl(this.donationidger(),Validators.required),
  restaurid : new FormControl(this.restaurid,Validators.required),
  ngosid : new FormControl('0',Validators.required),
  foodname : new FormControl('',Validators.required),
  foodquantity : new FormControl('',Validators.required),
  foodtype : new FormControl('',Validators.required),
  phone : new FormControl('',Validators.required),
  pickupaddress : new FormControl('',Validators.required),
  pickupcity : new FormControl('',Validators.required),
});

donate(){
  //  const  restaurid = localStorage.getItem('restaurid');
  //this.form.controls.restaurid.setValue(restaurid);
  this.data = this.form.value;
    this.service.donaterest(this.data).subscribe(data => {
      // redirect to home page
      alert("Donation Added");
      this.router.navigate(['/NGO-Dashboard']);
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
    }
    );
   
}

}
