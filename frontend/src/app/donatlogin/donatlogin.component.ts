import { Component } from '@angular/core';
import { UserService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-donatlogin',
  templateUrl: './donatlogin.component.html',
  styleUrls: ['./donatlogin.component.css']
})
export class DonatloginComponent {

  ngOnInit(): void {
  }

  constructor(private service: UserService, private router: Router){}

  data : any

  form = new FormGroup({
    donatorid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loginmessage: any;

  NGOlogin(){
    this.data = this.form.value;
    this.service.ngologin(this.data).subscribe(response => {
      // redirect to home page
      alert(response.message);
      //alert("Welcome " + response.ngoname);
      const donatorid = localStorage.setItem('donatorid', response.donatorid);
      this.router.navigate(['/Donate']);  
      this.loginmessage = response.message;
      //const ngoname = localStorage.getItem('ngoname');
      //alert("Login Successfull");

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
