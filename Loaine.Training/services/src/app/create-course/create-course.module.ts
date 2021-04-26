import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesService } from '../courses/courses.service';
import { CreateCourseComponent } from './create-course.component';
import { ReceiveCreatedCourseComponent } from './../receive-created-course/receive-created-course.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    ReceiveCreatedCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreateCourseComponent
  ],
  providers: [
  //  CoursesService
  ]

})
export class CoursesModule { }
