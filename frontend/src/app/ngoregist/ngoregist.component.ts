import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ngoregist',
  templateUrl: './ngoregist.component.html',
  styleUrls: ['./ngoregist.component.css']
})
export class NgoregistComponent {

  constructor(private service: UserService ,private router : Router ){}


  generaterestid() {
    const prefix = '98';
    const suffix = '24';
    let restid = prefix + Math.floor(1000 + Math.random() * 9000) + suffix;
    return restid;

  }

  data : any

  form = new FormGroup({
    ngosid: new FormControl(this.generaterestid(), Validators.required),
    ngoname: new FormControl('', Validators.required),
    foundername: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    howmuch: new FormControl('', Validators.required),
    query: new FormControl('', Validators.required)


  });

  ngoregistration(){
    this.data = this.form.value;
    this.service.ngoregistration(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/']);
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
