import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update } from 'firebase/database';
@Component({
  selector: 'app-donatorregi',
  templateUrl: './donatorregi.component.html',
  styleUrls: ['./donatorregi.component.css']
})
export class DonatorregiComponent {

    
    responsedatango: any;
    constructor(private router : Router , private service : UserService,private http: HttpClient) { }
  
    ngOnInit(): void {
      this.refreshNotes();
    }
    data : any;

    genrateid(){
      const prefix = '01';
    const suffix = '24';
    let result = prefix + Math.floor(1000 + Math.random() * 9000) + suffix;
    return result;

    }

   

    form = new FormGroup({
      donatorid : new FormControl(this.genrateid(),Validators.required),
      name: new FormControl('', Validators.required),
      last : new FormControl('',Validators.required),
      username : new FormControl('',Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

      });
 
    donregi(){
    //const  restaurid = localStorage.getItem('restaurid');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${restaurid}`);
    this.data = this.form.value;
    this.service.donateregister(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/']);
      alert("Registration Successfull");
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



    refreshNotes() {
      this.service.getdata().subscribe(data => {
        this.responsedatango = data;
      });
    }

    



}
