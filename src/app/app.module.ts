import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {CookieService} from 'ngx-cookie-service';
import {ModalDialogModule} from 'ngx-modal-dialog';

import {DataService} from './shared/data-service';
import {ConfigService} from './shared/config.service';

import {AppComponent} from './app.component';
import {TextTableComponent} from './components/text-table/text-table.component';
import {ChooseFileComponent} from './components/header/choose-file/choose-file.component';
import {InputFileReaderComponent} from './components/header/choose-file/input-file-reader/input-file-reader.component';
import {TestItemComponent} from './components/text-table/test-item/test-item.component';
import {SaveTestComponent} from './components/header/save-test/save-test.component';
import {SetConfigComponent} from './components/header/set-config/set-config.component';


@NgModule({
  declarations: [
    AppComponent,
    TextTableComponent,
    ChooseFileComponent,
    InputFileReaderComponent,
    TestItemComponent,
    SaveTestComponent,
    SetConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutosizeModule,
    AngularFontAwesomeModule,
    ModalDialogModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService, ConfigService, CookieService],
  bootstrap: [AppComponent],
  entryComponents: [SetConfigComponent]
})
export class AppModule {
}
