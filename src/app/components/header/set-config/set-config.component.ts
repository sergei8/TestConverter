import {Component, ComponentRef} from '@angular/core';
import {IModalDialog, IModalDialogOptions, IModalDialogButton} from 'ngx-modal-dialog';
import {ConfigService} from '../../../shared/config.service';

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
  constructor(private configService: ConfigService) {

    this.actionButtons = [
      {
        text: 'Сохранить', onAction: () => {
          this.configService.saveConfig();
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
