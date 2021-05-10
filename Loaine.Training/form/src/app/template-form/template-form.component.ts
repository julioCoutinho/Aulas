import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  formData;

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
    this.http.post(`https://httpbin.org/post`, JSON.stringify(form.value)).subscribe(
      data => console.log(data)
    );
  }

  fieldNotValidAndTouched(event){
    return !event.valid && event.touched;
  }

    
  findCEP(cep, form){
    cep = cep.replace(/\D/g,'');
    if(cep != ""){
      let validateCep = /^[0-9]{8}$/;
      if(validateCep.test(cep)){
        console.log("asdsa"); 
        //this.http.get();
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
           .subscribe(data => this.setDataForm(data,form));
      }else{
        this.resetFormData(form);
      }
    }
  }

  resetFormData(form){
    form.form.patchValue({
      Address: {
        complement: null,
        street: null,
        district: null,
        city: null,
        state: null
      }});
  }

  setDataForm(data, form){
    /*
    form.setValue({
      name: form.value.nome,
      emailAddress: form.value.emailAddress,
      Address: {
        cep: data.cep,
        number: form.value.number,
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
      }
    });
    */
   //this.resetFormData(form);
    form.form.patchValue({
      Address: {
        cep: data.cep,
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
      }});
  }
}
