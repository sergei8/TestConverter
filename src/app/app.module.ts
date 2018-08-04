import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './shared/data-service';

import { AppComponent } from './app.component';
import { TextTableComponent } from './components/text-table/text-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TextTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
