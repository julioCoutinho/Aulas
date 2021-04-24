import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customized',
  templateUrl: './customized.component.html',
  styleUrls: ['./customized.component.css']
})
export class CustomizedComponent implements OnInit {

  showCourse = false;



  onShowCourses(){
    this.showCourse = !this.showCourse;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
