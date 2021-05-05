import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../course/courses.service';
@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  id = 0;
  course: any;
  subscribe: Subscription = new Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private courseServices: CoursesService
    ) { 
    //this.id = this._route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.subscribe = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      
        this.course = this.courseServices.getCourse(this.id);
        if(this.course == null){
          this._router.navigate(['courses/notFound',this.id]);
        }
      }
    );
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
