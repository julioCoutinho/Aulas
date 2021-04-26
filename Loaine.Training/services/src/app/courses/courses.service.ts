import { Injectable,EventEmitter } from "@angular/core";

import { LogService } from './../shared/log.service';

@Injectable()
export class CoursesService{

  courses = ['Angular2','Java','Springboot'];
  emmitCreatedCourse = new EventEmitter();
  static createdNewCourse = new EventEmitter();

  constructor (private logService: LogService){
    console.log('Courses service created');
  }

  getCourses(){
    this.logService.consoleLog("Getting courses list...");
    return this.courses;
  }

  addCourses(course: string){
    this.logService.consoleLog(`Creating new course... ${course}`);
    this.courses.push(course);
    this.emmitCreatedCourse.emit(course);
    CoursesService.createdNewCourse.emit(course);
  }

}
