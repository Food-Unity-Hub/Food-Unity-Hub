import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgodashComponent } from './ngodash/ngodash.component';
import { NgoanaComponent } from './ngoana/ngoana.component';
import { NgodonaComponent } from './ngodona/ngodona.component';
import { RestregisComponent } from './restregis/restregis.component';
import { NgoproComponent } from './ngopro/ngopro.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestdashComponent } from './restdash/restdash.component';    
import {RestprofComponent} from './restprof/restprof.component';
import {RestordeComponent} from './restorde/restorde.component';
import {RestmenuComponent} from './restmenu/restmenu.component';
import { RestanaComponent } from './restana/restana.component';
import { NgoregistComponent } from './ngoregist/ngoregist.component';
import { DonatorComponent } from './donator/donator.component';
import { DonatorregiComponent } from './donatorregi/donatorregi.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import { RestloginComponent } from './restlogin/restlogin.component';
import { DonatloginComponent } from './donatlogin/donatlogin.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { RestproeditComponent } from './restproedit/restproedit.component';
import { NgoproeditComponent } from './ngoproedit/ngoproedit.component';
import { RestdonationComponent } from './restdonation/restdonation.component';
import { DonatororderComponent } from './donatororder/donatororder.component';
import { map } from 'rxjs';
import { MapComponent } from './map/map.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddUserComponent },
  {path:'home',component:HomeComponent},
  { path: 'update/:id', component: UpdateUserComponent},
  { path: 'Home', component: HomeComponent },
  {path: 'Contact', component: ContactComponent},
  {path: 'NGO', component: NgodashComponent},
  {path:'ngologin',component:NgologinComponent},
  {path: 'Restaurant-Registration',component: RestregisComponent},
  {path : 'NGO-analytics', component: NgoanaComponent},
  {path : 'NGO-Donations-Orders', component: NgodonaComponent},
  {path : 'NGO-Settings',component:   NgoanaComponent},
  {path: 'NGO-Profile', component : NgoproComponent},
  {path: "NGO-Dashboard",component: NgodashComponent},
  {path:'NGO-Registration',component:NgoregistComponent},
  {path:'Donator',component:DonatorComponent},
  {path :'restlogin',component: RestloginComponent},
  {path:'donatlogin',component:DonatloginComponent},
  {path:'donatorregis',component:DonatorregiComponent},
  {path: 'Restaurants',component: RestaurantComponent},
  {path: 'Restaurant-Dashboard', component: RestdashComponent},
  {path: 'Restaurant-Profile',component:RestprofComponent},
  {path: 'Restaurant-Settings', component:RestdashComponent},
  {path: 'Restaurant-Orders', component:RestordeComponent},
  {path:'Restaurant-Menu', component: RestmenuComponent},
  {path: 'Restaurant-Analytics', component: RestanaComponent},
  {path: 'addmenu', component: AddMenuComponent },
  {path: 'editirestpro',component: RestproeditComponent},
  {path: 'editngopro',component: NgoproeditComponent},
  {path:'restdonation', component: RestdonationComponent},
  {path:'Donate',component: DonatororderComponent},
  {path:'map',component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
