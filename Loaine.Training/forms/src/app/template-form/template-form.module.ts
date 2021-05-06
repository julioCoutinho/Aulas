import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { RequiredFieldTextComponent } from '../required-field-text/required-field-text.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    RequiredFieldTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
