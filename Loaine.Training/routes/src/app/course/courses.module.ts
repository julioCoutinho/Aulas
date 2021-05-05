import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CourseComponent } from './course.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesService } from './courses.service';
import { CoursesRoutingModule } from './courses.routing.module';



@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule
    ],
    exports: [],
    declarations:[
        CourseComponent,
        CoursesDetailComponent,
        CourseNotFoundComponent
    ],
    providers: [CoursesService],
})

export class CoursesModule { }