import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [];
  //coursesService: CoursesService;

  constructor(private _coursesService: CoursesService) {
    //this.coursesService = _coursesService;
    //this.coursesService = new CoursesService();
   }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();

    CoursesService.createdNewCourse.subscribe(
      course => this.courses.push(course)
    );
  }

}
