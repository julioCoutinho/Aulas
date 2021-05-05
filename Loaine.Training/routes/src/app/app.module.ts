import { StudentsGuard } from './guards/students.guard';
import { CoursesGuard } from './guards/courses.guard';
import { AuthGuard } from './guards/auth.guard';
import { APPRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    APPRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CoursesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
