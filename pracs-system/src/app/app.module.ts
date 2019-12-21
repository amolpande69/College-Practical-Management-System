//built-in 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
//routes
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user.service';
//components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { TeacherprofileComponent } from './teacherprofile/teacherprofile.component';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StudentprofileComponent,
    TeacherprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
