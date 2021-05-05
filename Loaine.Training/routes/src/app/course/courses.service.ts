import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(){
    return [
      {id: 1, name: 'Angular2'},
      {id: 2, name: 'Java'}
    ];
  }

  getCourse(id:number){
    let courses = this.getCourses();
    
    for (let i = 0; i < courses.length; i++){
       if (courses[i].id == id) return courses[i];
    }
    return null;
  }

  constructor() { }
}
