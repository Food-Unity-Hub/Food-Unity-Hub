import { Component } from '@angular/core';
import { UserService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restregis',
  templateUrl: './restregis.component.html',
  styleUrls: ['./restregis.component.css']
})
export class RestregisComponent {

  constructor(private service: UserService, private router: Router){}

  list : number[] = [];

  generaterestid() {
    const prefix = '89';
    const length = 6;
    const postfix = '24';
    let random = Math.floor(Math.random() * 1000000);
    while (this.list.includes(random)) {
      random = Math.floor(Math.random() * 1000000);
    }
    this.list.push(random);
    const result = prefix + random.toString().padStart(length, '0') + postfix;
    return result;

  }

  ngOnInit(): void {
  }


  data : any

  form = new FormGroup({
    restaurid: new FormControl(this.generaterestid(), Validators.required),
    restname: new FormControl('', Validators.required),
    ownername: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    howmuch: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    query: new FormControl('', Validators.required)

  });

 
  registerngo(){
    this.data = this.form.value;
    this.service.registerrest(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/']);
      alert("Registration Successfull");
      
    },

    (error: any) => {
      if (error.status == 401){
        alert("Invalid Credentials");
      }
      else if (error.status == 404){
        alert("Registration Failed");
      }
      else{
        alert("Server Error");
      }

    }
    
    );
    
  }


}
