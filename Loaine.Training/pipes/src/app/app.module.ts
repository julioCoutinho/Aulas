import { SettingsService } from './settings.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplePipesComponent } from './example-pipes/example-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ArrayFilterImpurePipe } from './array-filter-impure.pipe';
import { ImpureArrayFilterPipe } from './impure-array-filter.pipe';
import { HomeComponent } from './home/home.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExamplePipesComponent,
    CamelCasePipe,
    ArrayFilterPipe,
    ArrayFilterImpurePipe,
    ImpureArrayFilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
   /* { provide: LOCALE_ID, useValue: 'pt-BR'},*/
    SettingsService,
    {provide: LOCALE_ID, deps:[SettingsService],useFactory:(settingsService) => settingsService.getLocale()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
