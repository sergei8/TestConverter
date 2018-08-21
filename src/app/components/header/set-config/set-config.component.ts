import {Component, ComponentRef} from '@angular/core';
import {IModalDialog, IModalDialogOptions, IModalDialogButton} from 'ngx-modal-dialog';
import {Config} from '../../../shared/interfaces';
import {DataService} from '../../../shared/data-service';
import {ConfigService, DEFAULT_ANSWERS, DEFAULT_SEM_CHECK} from '../../../shared/config.service';

@Component({
  selector: 'app-set-config',
  templateUrl: './set-config.component.html',
  styleUrls: ['./set-config.component.css']
})
export class SetConfigComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];

  constructor(private configService: ConfigService) {

    this.actionButtons = [
      {text: 'Сохранить'},
      {text: 'Прервать'}
      // {text: 'I will always close', onAction: () => true, buttonClass: 'btn btn-success'}
      // {text: 'I never close', onAction: () => false}
    ];

    // this.settings.headerClass = 'display: none';
    console.log(this.actionButtons);
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }


}
