import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { RequiredFieldTextComponent } from './required-field-text/required-field-text.component';
import { DropdownService } from './services/dropdown.service';



@NgModule({
  declarations: [
    FormDebugComponent,
    RequiredFieldTextComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FormDebugComponent,
    RequiredFieldTextComponent
  ],
  providers:[
    DropdownService
  ]
})
export class SharedModule { }
