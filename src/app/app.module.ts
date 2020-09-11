import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Baimau1Component } from './baimau1/baimau1.component';
import { Bth2Bai1Component } from './bth2-bai1/bth2-bai1.component';
import { Bth2Bai2Component } from './bth2-bai2/bth2-bai2.component';

@NgModule({
  declarations: [
    AppComponent,
    Baimau1Component,
    Bth2Bai1Component,
    Bth2Bai2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
