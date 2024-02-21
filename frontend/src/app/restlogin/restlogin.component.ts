import { Component } from '@angular/core';
import { UserService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restlogin',
  templateUrl: './restlogin.component.html',
  styleUrls: ['./restlogin.component.css']
})
export class RestloginComponent {



  ngOnInit(): void {
  }
  constructor(private service: UserService, private router: Router){}

  data : any

  

  form = new FormGroup({
    restaurid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loginmessage: any;
  loginrest(){
    this.data = this.form.value;
    this.service.loginrest(this.data).subscribe(response => {
      // redirect to home page
      alert(response.message);
      //alert("Welcome " + response.restname);
      const restaurid = localStorage.setItem('restaurid', response.restaurid);
      this.router.navigate(['/Restaurant-Dashboard']);  
      this.loginmessage = response.message;
      //const restname = localStorage.getItem('restname');
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
