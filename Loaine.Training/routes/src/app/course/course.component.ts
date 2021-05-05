import { Subscription } from 'rxjs';
import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: any[] | undefined;
  page: number = 0;
  inscribe:Subscription = new Subscription();

  constructor( 
    private _courseService: CoursesService,
    private _route: ActivatedRoute,
    private _router: Router
    ){

   }

   
  ngOnInit(): void {
    this.courses = this._courseService.getCourses();

    this.inscribe = this._route.queryParams.subscribe(
      (queryParams) => {
        this.page = queryParams['page'];
      }
    );
  }

  ngOnDestroy(){
    this.inscribe.unsubscribe();
  }
  
  nextPage(){
    //this.page++;
    this._router.navigate(['/courses'],
      {queryParams:{'page':++this.page}}
    );
  }

}
