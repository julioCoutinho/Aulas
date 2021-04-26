import { CoursesService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-created-course',
  templateUrl: './receive-created-course.component.html',
  styleUrls: ['./receive-created-course.component.css']//,
  //providers:[ CoursesService ]
})
export class ReceiveCreatedCourseComponent implements OnInit {

  course;

  constructor(private  coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.emmitCreatedCourse.subscribe(
      createdCourse => this.course = createdCourse
    );
  }

}
