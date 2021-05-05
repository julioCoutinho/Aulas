import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentsService } from './students.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        StudentsRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        StudentsComponent,
        StudentFormComponent,
        StudentDetailComponent
    ],
    providers: [
        StudentsService
    ],
})
export class StudentsModule { }
