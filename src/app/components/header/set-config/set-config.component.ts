import {Component, ComponentRef} from '@angular/core';
import {IModalDialog, IModalDialogOptions, IModalDialogButton} from 'ngx-modal-dialog';
import {ConfigService} from '../../../shared/config.service';
import {DataService} from '../../../shared/data-service';
import {async} from 'q';

@Component({
  selector: 'app-set-config',
  templateUrl: './set-config.component.html',
  styleUrls: ['./set-config.component.css']
})
export class SetConfigComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];

  /**
   * определяет функционал кнопок диалогового окна настройки конфига
   * @param {ConfigService} configService
   */
  constructor(private configService: ConfigService,
              private dataService: DataService) {

    this.actionButtons = [
      {
        text: 'Сохранить', onAction: () => {
          // console.log(this.configService.isTestLoaded);
          this.configService.saveConfig();
          // если файл уже загружен, перегружаем его с новым конфигом
          if (this.configService.isTestLoaded) {
            async(this.dataService.getPlainTests(this.dataService.file));
          }
          return true;
        }
      },
      {
        text: 'Прервать'
      }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }


}
