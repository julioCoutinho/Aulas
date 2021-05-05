import { StudentsGuard } from './guards/students.guard';
import { CoursesGuard } from './guards/courses.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesModule } from './course/courses.module';
import { StudentsModule } from './students/students.module';



const APP_ROUTES: Routes = [
    { path: 'courses', loadChildren: () => CoursesModule, canActivate: [AuthGuard], canActivateChild:[CoursesGuard]},
    { path: 'students', loadChildren: () => StudentsModule, canActivate: [AuthGuard],canActivateChild:[StudentsGuard]},
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class APPRoutingModule {}