import { element } from 'protractor';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loaine.com';
  angularCourse = true;
  imageUrl = 'http://lorempixel.com.br/400/200/sports';
  actualValue = '';
  savedValue = '';
  isMouseOver = false;
  courseName = 'Angular';
  contValue = 15;
  value = 5;
  deletedCycle = false;


  getValue(){
    return 1;
  }

  getLikeCourse(){
    return true;
  }

  ClickedButton(){
    alert( "You clicked on the button!");
  }

  OnKeyUp(event: KeyboardEvent){
   this.actualValue = ((<HTMLInputElement>event.target).value);
  }

  SaveValue(value: any){
    this.savedValue = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChanged(event: any){
    console.log(event);
  }

  changeValue(){
    this.value++;
  }


  deleteCycle(){
    this.deletedCycle = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
