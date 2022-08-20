import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerComponent } from './containers/volunteer/volunteer.component';
import { LoginComponent } from './containers/common/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { LogincompComponent } from './components/logincomp/logincomp.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { UserloginService } from './services/users-services/userlogin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptorService } from './components/logincomp/token-interceptor.service';
import { UsersignupService } from './services/users-signup/usersignup.service';
import { ViewComponent } from './containers/view/view.component';
import { GuestComponent } from './containers/guest/guest.component';
import { CandidateComponent } from './containers/candidate/candidate.component';
import { VolunteerServicesService } from './containers/volunteer/services/volunteer-services.service';
import { ModalComponent } from './containers/candidate/modal/modal.component';
import { SubmitComponent } from './containers/candidate/submit/submit.component';
import { EventsComponent } from './containers/candidate/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent,
    LoginComponent,
    HeaderComponent,
    LogincompComponent,
    SignupComponent,
    ViewComponent,
    GuestComponent,
    CandidateComponent,
    UserupdateComponent,
    ModalComponent,
    SubmitComponent,
    EventsComponent,
    FooterComponent,
    EventPageComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserloginService, UsersignupService, VolunteerServicesService, 
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptorService,
  //   multi: true
  // },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
