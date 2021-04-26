import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers:[CoursesService]
})
export class CreateCourseComponent implements OnInit {

  courses = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onAddCourse(course: string){
    this.coursesService.addCourses(course);
  }

}
