import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-required-field-text',
  templateUrl: './required-field-text.component.html',
  styleUrls: ['./required-field-text.component.css']
})
export class RequiredFieldTextComponent implements OnInit {


  @Input() showError:boolean;
  @Input() showErrorMessage:string;

  constructor() { }

  ngOnInit(): void {
  }

}
