import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { LoginComponent } from './view/login/login.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './comps/register/register.component';
import { AddMovieComponent } from './mov-comp-admin/add-movie/add-movie.component';
import { DeleteMovieComponent } from './mov-comp-admin/delete-movie/delete-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './comps/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
