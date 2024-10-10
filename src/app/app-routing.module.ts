import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { RegisterComponent } from './comps/register/register.component';
import { DeleteMovieComponent } from './mov-comp-admin/delete-movie/delete-movie.component';
import { AddMovieComponent } from './mov-comp-admin/add-movie/add-movie.component';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './comps/booking/booking.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
{path:"login" , component: LoginComponent},
{path:"about", component: AboutComponent},
{path:"contact", component:ContactComponent},
{path:"dashboard", component:DashboardComponent , canActivate: [AuthGuard],},
{path:"register" , component: RegisterComponent},
{path:"delete-movie" , component: DeleteMovieComponent},
{path:"add-movie", component:AddMovieComponent},
{path:"book", component: BookingComponent},
{path:"book/:mid", component: BookingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
