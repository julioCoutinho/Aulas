import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

  work: any = {
    description: 'Work description',
    //responsible: null
    responsible: {
      user: {
        name: 'Julio'
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
