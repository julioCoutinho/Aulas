import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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

  constructor(
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form);
  }

  fieldNotValidAndTouched(event){
    return !event.valid && event.touched;
  }

  /*
  findCEP(cep){
    cep = cep.replace(/\D/g,'');
    if(cep == ""){
      let validateCep = /^[0-9]{8}$/;
      if(validateCep.test(cep)){
        //this.http.get();
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
           .subscribe(resultado => console.log(resultado));
      }
    }
  }
*/
}
