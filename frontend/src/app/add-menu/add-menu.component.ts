import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestloginComponent } from '../restlogin/restlogin.component';
import { UserService } from 'src/app/app.service';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {

  responsedata: any;
  constructor(private http: HttpClient , private router : Router, private service : UserService , private DATA : RestloginComponent) { }
  restid : any;
  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
  const  restaurid = localStorage.getItem('restaurid');
  this.restid = restaurid;
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
  restu = localStorage.getItem('restaurid');
  restname = localStorage.getItem('restaurname');

  data : any
  form = new FormGroup({
    restaurid : new FormControl(this.restu, Validators.required),
    itemname: new FormControl('', Validators.required),
    itemprice: new FormControl('', Validators.required),
    itemtype: new FormControl('', Validators.required),
    itmgurl: new FormControl('', Validators.required),
  });

  addmenud(){
    this.data = this.form.value;
    this.service.addmenu(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/addmenu'])
      alert("Menu Added Successfully");
    });

  }

  




  
}
