import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { FormsModule } from '@angular/forms';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { BgYellowDirective } from './shared/bg-yellow.directive';
import { CustomizedComponent } from './customized/customized.component';
import { HighlightDirective } from './shared/highlight.directive';
import { HiglightMouseDirective } from './shared/higlight-mouse.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    ElvisOperatorComponent,
    NgcontentComponent,
    BgYellowDirective,
    CustomizedComponent,
    HighlightDirective,
    HiglightMouseDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
