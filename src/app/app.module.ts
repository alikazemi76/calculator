import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './calculator/button/button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
// import {Stack} from 'ts-data.stack';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Stack,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
