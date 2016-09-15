import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Panel} from './container/panel'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,Panel],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
