import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgoComponent } from './ngo/ngo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DonaterComponent } from './donater/donater.component';
import { RestregisComponent } from './restregis/restregis.component';
import { RestloginComponent } from './restlogin/restlogin.component';
import { RestdashRestanaComponent } from './restdash-restana/restdash-restana.component';
import { RestdashComponent } from './restdash/restdash.component';
import { RestanaComponent } from './restana/restana.component';
import { RestprofComponent } from './restprof/restprof.component';
import { RestsettComponent } from './restsett/restsett.component';
import { RestmenuComponent } from './restmenu/restmenu.component';
import { RestaddmenuComponent } from './restaddmenu/restaddmenu.component';
import { RestordeComponent } from './restorde/restorde.component';
import { RestdataComponent } from './restdata/restdata.component';
import { NgodashComponent } from './ngodash/ngodash.component';
import { NgoanaComponent } from './ngoana/ngoana.component';
import { NgoproComponent } from './ngopro/ngopro.component';
import { NgosetComponent } from './ngoset/ngoset.component';
import { NgodonaComponent } from './ngodona/ngodona.component';
import { NgodataComponent } from './ngodata/ngodata.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import { NgoregistComponent } from './ngoregist/ngoregist.component';
import { DonatorComponent } from './donator/donator.component';
import { DonatorprofComponent } from './donatorprof/donatorprof.component';
import { DonatororderComponent } from './donatororder/donatororder.component';
import { DonatorregiComponent } from './donatorregi/donatorregi.component';
import { DonatloginComponent } from './donatlogin/donatlogin.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { RestproeditComponent } from './restproedit/restproedit.component';
import { NgoproeditComponent } from './ngoproedit/ngoproedit.component';
import { RestdonationComponent } from './restdonation/restdonation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    HomeComponent,
    NgoComponent,
    AboutComponent,
    ContactComponent,
    RestaurantComponent,
    DonaterComponent,
    RestregisComponent,
    RestloginComponent,
    RestdashRestanaComponent,
    RestdashComponent,
    RestanaComponent,
    RestprofComponent,
    RestsettComponent,
    RestmenuComponent,
    RestaddmenuComponent,
    RestordeComponent,
    RestdataComponent,
    NgodashComponent,
    NgoanaComponent,
    NgoproComponent,
    NgosetComponent,
    NgodonaComponent,
    NgodataComponent,
    NgologinComponent,
    NgoregistComponent,
    DonatorComponent,
    DonatorprofComponent,
    DonatororderComponent,
    DonatorregiComponent,
    DonatloginComponent,
    AddMenuComponent,
    RestproeditComponent,
    NgoproeditComponent,
    RestdonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
