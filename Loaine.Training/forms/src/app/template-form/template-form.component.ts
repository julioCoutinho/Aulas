import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user = {
    name: null,
    email: null,
    street: null,
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form);
  }

  fieldNotValidAndTouched(event){
    return !event.valid && event.touched;
  }

}
