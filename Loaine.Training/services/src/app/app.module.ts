import { CoursesModule } from './create-course/create-course.module';
import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { LogService  } from './shared/log.service';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ],
  providers: [
    CoursesService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
