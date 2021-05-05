import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  private students: any[] = [
    {id: 1, name: 'Student 01', email: 'student01@gmail.com'},
    {id: 2, name: 'Student 02', email: 'student02@gmail.com'},
    {id: 3, name: 'Student 03', email: 'student03@gmail.com'},
  ];

  getStudents(){
    return this.students;
  }

  getStudent(id: number){
    for(let i = 0; i < this.students.length; i++){
      let student = this.students[i];
      if(student.id == id){
        return student;
      }
    }
    return null;
  }


  constructor() { }
}
