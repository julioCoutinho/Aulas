import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
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
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class APPRoutingModule {}