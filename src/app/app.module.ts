import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PepperoniComponent } from './app.component';
import { OtherComponent, NestedCalzoneComponent, NestedPastaComponent } from './other-component/other-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PepperoniComponent,
    OtherComponent,
    NestedCalzoneComponent,
    NestedPastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
