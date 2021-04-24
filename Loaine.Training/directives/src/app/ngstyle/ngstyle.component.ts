import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  active = false;
  fontSize= 14;

  activeChange(){
    this.active = !this.active;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
