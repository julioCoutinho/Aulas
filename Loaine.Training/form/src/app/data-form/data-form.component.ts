import { FindCepService } from './../shared/services/find-cep.service';
import { BrUf } from './../shared/models/BrUf';
import { DropdownService } from './../shared/services/dropdown.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;
  //ufs: any;
  check: boolean = false;
  ufs: any;
  roles: any[];
  tec: any[];
  newsletter: any[];
  framework:string[] = ['Angular', 'React', 'Vue', 'Springboot'];

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private _dropdown: DropdownService,
    private _cepService: FindCepService
  ) { }

  ngOnInit(): void {
  /*
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
    });
  */
   this.form = this._formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],

    address: this._formBuilder.group({
      cep: [null, Validators.required],
      number: [null, Validators.required],
      complement: [null],
      street: [null, Validators.required],
      district: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
    }),
    role: [null],
    tecno: [null],
    newsletter: ['s'],
    terms: [null, Validators.pattern('true')],
    frameworks: this.buildFrameworks()
   });



  /*
   this._dropdown.getBrUf().subscribe(data => {this.ufs = data; console.log(data) });*/
   this.ufs = this._dropdown.getBrUf();
   this.roles = this._dropdown.getRoles();
   this.tec = this._dropdown.getTecno();
   this.newsletter = this._dropdown.getNewsLetter();
  }

  setRole(){
    const role = {name: 'Dev', level: 'Senior', desc: 'Dev Sr.'};
    this.form.get('role').setValue(role);
  }

  compareRoles(firstRole, secondRole){
    return firstRole && secondRole ? (firstRole.name === secondRole.name && firstRole.level === secondRole.level) : firstRole && secondRole;  }

  onSubmit(){
    let valueSubmit = Object.assign({}, this.form.value);
    valueSubmit = Object.assign(valueSubmit,{
      frameworks: valueSubmit.frameworks.map((v, i) => v ? this.framework[i] : null).
      filter(v=> v !== null)
    })

    if(!this.form.valid){
      //this.verifyFormValidations(this.form);
    }
    this.http.post(`https://httpbin.org/post`, JSON.stringify(valueSubmit)).subscribe(
      data => {
        console.log(data);

        //this.reset();
      },
      (error:any) => console.log(error)
    );
  }

  verifyFormValidations(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(
      data => {
        const control = formGroup.get(data);
        control.markAsDirty();
        if(control instanceof FormGroup)
          this.verifyFormValidations(control)
      }
    );
    return;
  }
  reset(){
    this.form.reset();
  }

  verifyValidTouched(field:string){
    return this.verifyValid(field) && this.verifyTouched(field) || this.form.dirty;
    //return !field.valid && field.touched;
  }

  verifyValid(field:string){
    return !this.form.get(field).valid;
  }

  verifyTouched(field:string){
    return this.form.get(field).touched;
  }

  applyCssError(field:string){
    return {
      'applyError': this.verifyValidTouched(field)
    }
  }

  acceptTerms(field:string){
    let str;
    !this.form.get(field).valid ? str = 'is-invalid' : str = 'is-valid'
    if(!this.form.get('terms').touched)
      str = 'is-invalid';
    return str;
  }

  findCEP(){
    let cep = this.form.get('address.cep').value;
    if(cep != null && cep !== ''){
      this._cepService.findCEP(cep).subscribe(
        data => this.setDataForm(data)
      )
    }
  }

  setDataForm(data){
    this.form.patchValue({
      address: {
        cep: data.cep,
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf
      }});
  }

  resetFormData(){
    this.form.patchValue({
      Address: {
        complement: null,
        street: null,
        district: null,
        city: null,
        state: null
      }});
  }

  setTecno(){
    this.form.get('tecno').setValue(['java','javascript','php'])
  }

  buildFrameworks(){
    const values = this.framework.map(v => new FormControl(false));
    return this._formBuilder.array(values, this.requiredMinCheckbox(1));
  }

  requiredMinCheckbox(min = 1){
    const validator =
      (formArray: FormArray) => {
        /*
         const values = formArray.controls;
         let totalCheck = 0;
         for(let i = 0; i < values.length; i++){
            if(values[i].value){
              totalCheck+=1;
            }
         }*/
         const totalChecked = formArray.value.map( v=> v.value)
         .reduce((total, current) => current ? total + current : total, 0);
         return totalChecked >= min ? null : { required: true };
      }
    };
}
