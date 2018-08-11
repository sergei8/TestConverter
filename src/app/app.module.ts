import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './shared/data-service';

import { AppComponent } from './app.component';
import { TextTableComponent } from './components/text-table/text-table.component';
import { ChooseFileComponent } from './components/header/choose-file/choose-file.component';
import { InputFileReaderComponent } from './components/header/choose-file/input-file-reader/input-file-reader.component';
import { TestItemComponent } from './components/text-table/test-item/test-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TextTableComponent,
    ChooseFileComponent,
    InputFileReaderComponent,
    TestItemComponent
  ],
  imports: [
    BrowserModule,
    // mammoth
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
