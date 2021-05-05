import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example-pipes',
  templateUrl: './example-pipes.component.html',
  styleUrls: ['./example-pipes.component.css']
})
export class ExamplePipesComponent implements OnInit {

  book = {
    title: 'Código limpo: habilidades práticas do Agile Software',
    rating: 4.8486,
    pageNumber: 456,
    price: 70.99,
    releaseDate: new Date(2009,8,8),
    url: 'https://www.amazon.com.br/Código-limpo-Robert-C-Martin/dp/8576082675/ref=asc_df_8576082675/?tag=googleshopp00-20&linkCode=df0&hvadid=379792215563&hvpos=&hvnetw=g&hvrand=15138776755353626230&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001570&hvtargid=pla-398225630878&psc=1'
  }

  courses = ['Angular', 'Springboot'];

  filter = '';

  asyncValue = new Promise((resolve,reject) => {setTimeout(() => resolve('Async value'),2000)});

  constructor() { }

  ngOnInit(): void {
  }

  addNewCourse(course:string){
    this.courses.push(course);
    console.log(this.courses);
  }

  getCourse(){
    if (this.courses.length === 0 || this.filter === undefined || this.filter.trim() === "") return this.courses;
    return this.courses.filter((v) => {
      if(v.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0){
        return true;
      }else {
        return false;
      }
    })
  }

}
