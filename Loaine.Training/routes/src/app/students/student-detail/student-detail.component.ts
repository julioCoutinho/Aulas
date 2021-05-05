import { StudentsService } from './../students.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: any;
  subscription: Subscription = new Subscription();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      (params) => {
        let id = params['id'];

        this.student = this._studentsService.getStudent(id);
      }
    )
  }

  editContact(){
    this._router.navigate(['students',this.student.id,'edit']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
