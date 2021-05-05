import { StudentsService } from './../students.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: any = { };
  subscription: Subscription = new Subscription();
  formChange = false;
  constructor(
    private _route: ActivatedRoute,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      (params) => {
        let id = params['id'];

        this.student = this.studentsService.getStudent(id);

        if(this.student === null){
          this.student = {};
        }
      }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onInput(){
    this.formChange = true;
  }

  isFormChange(){
    return confirm('Are you sure that u whant to close this page?');
  }
}
