import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ConfigService, DEFAULT_ANSWERS, DEFAULT_SEM_CHECK} from './shared/config.service';
import {ModalDialogService} from 'ngx-modal-dialog';
import {SetConfigComponent} from './components/header/set-config/set-config.component';
import {DataService} from './shared/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigService,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef,
              public dataservice: DataService) {
  }

  /**
   *   при инициадизации приложения проверяем есть ли в куках
   *  конфиг. Если нет, устанавливаем по умолчанию и сохраняем
   *  если есть - то в readConfig они установятся и станут теущими
   */
  ngOnInit() {
    const configCookie = this.configService.readConfig();
    if (configCookie === undefined) {
      this.configService.config.answersNumber = DEFAULT_ANSWERS;
      this.configService.config.semanticCheck = DEFAULT_SEM_CHECK;
      this.configService.saveConfig();
    }
  }

  /**
   * макет диалогового окна настройки конфигурации
   */
  showConfig() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Параметры конвертера',
      childComponent: SetConfigComponent,
      settings: {
        headerTitleClass: 'h5 label',
        buttonClass: 'btn btn-sm btn-outline-info'
      },
    });
  }

}
