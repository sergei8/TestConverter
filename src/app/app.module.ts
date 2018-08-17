import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {DataService} from './shared/data-service';
import {ConfigService} from './shared/config.service';

import {AppComponent} from './app.component';
import {TextTableComponent} from './components/text-table/text-table.component';
import {ChooseFileComponent} from './components/header/choose-file/choose-file.component';
import {InputFileReaderComponent} from './components/header/choose-file/input-file-reader/input-file-reader.component';
import {TestItemComponent} from './components/text-table/test-item/test-item.component';
import {SaveTestComponent} from './components/header/save-test/save-test.component';


@NgModule({
  declarations: [
    AppComponent,
    TextTableComponent,
    ChooseFileComponent,
    InputFileReaderComponent,
    TestItemComponent,
    SaveTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutosizeModule,
    AngularFontAwesomeModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
