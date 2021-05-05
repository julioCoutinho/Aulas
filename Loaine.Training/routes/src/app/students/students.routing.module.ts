import { StudentsDeactivateGuard } from './../guards/students-deactivate.guard';
import { RouterModule, CanDeactivate } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsGuard } from '../guards/students.guard';

const studentRoutes = [
    { path: '', component: StudentsComponent, children: [
        { path: 'new', component: StudentFormComponent },
        { path: ':id', component: StudentDetailComponent },
        { path: ':id/edit', component: StudentFormComponent, CanDeactivate:[StudentsDeactivateGuard]},
    ]},
    
    
]

@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    providers:[
        StudentsGuard,
        StudentsDeactivateGuard
    ],
    exports: [RouterModule]
})

export class StudentsRoutingModule {}