import { Component } from '@angular/core';
import { UserService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngologin',
  templateUrl: './ngologin.component.html',
  styleUrls: ['./ngologin.component.css']
})
export class NgologinComponent {

  ngOnInit(): void {
  }

  constructor(private service: UserService, private router: Router){}

  data : any

  form = new FormGroup({
    ngosid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loginmessage: any;

  NGOlogin(){
    this.data = this.form.value;
    this.service.ngologin(this.data).subscribe(response => {
      // redirect to home page
      alert(response.message);
      //alert("Welcome " + response.ngoname);
      const ngosid = localStorage.setItem('ngosid', response.ngosid);
      this.router.navigate(['/NGO-Dashboard']);  
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
