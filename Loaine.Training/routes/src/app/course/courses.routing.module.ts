import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CourseComponent } from './course.component';

const COURSES_ROUTES: Routes = [
    { path: '', component: CourseComponent },
    { path: ':id', component: CoursesDetailComponent },
    { path: 'notFound/:id', component: CourseNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(COURSES_ROUTES)],
  exports: [RouterModule]
})

export class CoursesRoutingModule {}