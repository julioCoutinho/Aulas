import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  myfavorite=false;
  constructor() { }
  changeFavorite(){
    this.myfavorite = !this.myfavorite;
  }
  ngOnInit(): void {
  }

}
