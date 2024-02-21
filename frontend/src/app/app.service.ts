import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { restregis } from './restregi';
import { donation } from './donation';
import { Firestore,addDoc, collection, collectionData, deleteDoc , deleteField , doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://127.0.0.1:8000/api/restaurant/';

  private ngourl: string = 'http://127.0.0.1:8000/api/ngosregister/';

  private restlogin : string = 'http://127.0.0.1:8000/api/restlogin/';

  private menurest : string = 'http://127.0.0.1:8000/api/restmenu/';

  private restorde : string = 'http://127.0.0.1:8000/api/restuserdata/';

  private nglogin : string = 'http://127.0.0.1:8000/api/ngologin/';

  private restdon : string = 'http://127.0.0.1:8000/api/restdonte/';

  private donareurl : string = 'http://127.0.0.1:8000/api/donatorregis/';


  constructor(private http: HttpClient, private fs : Firestore) { }
  

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${id}/`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}${id}/`);
  }

  registerrest(Restregis: restregis): Observable<restregis> {
    return this.http.post<restregis>(this.url, Restregis);
  }

  ngoregistration(restauregister: restregis): Observable<restregis> {
    return this.http.post<restregis>(this.ngourl, restauregister);
  }



  //authenitcation part 

  //restaurant login 

  loginrest(data: any): Observable<any> {
    return this.http.post<any>(this.restlogin, data);
  }

  addmenu(data: any): Observable<any> {
    return this.http.post<any>(this.menurest, data);
  }
  upadtemenu(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.menurest}${id}/`, data);
  }

  ngologin(data: any): Observable<any> {
    return this.http.post<any>(this.nglogin, data);
  }
  
  //editprofile(data:any): Observable<any> {
    //return this.http.put<any>(this.restorde, data);
  //}

  donaterest(donation: donation): Observable<any> {
    return this.http.post<any>(this.restdon, donation );
  }
  donateregister(donator: any): Observable<any> {
    return this.http.post<any>(this.donareurl, donator);
  }


  getdata(){
    let notescollector = collection(this.fs, 'nots');
    return collectionData(notescollector,{idField: 'id'});
  }
  
  adddata(name :string){
    let data = {description: name};
    let notescollector = collection(this.fs, 'nots');
    return addDoc(notescollector, data);
  }

}
