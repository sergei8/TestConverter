import {Component, ComponentRef} from '@angular/core';
import {IModalDialog, IModalDialogOptions, IModalDialogButton} from 'ngx-modal-dialog';

@Component({
  selector: 'app-set-config',
  templateUrl: './set-config.component.html',
  styleUrls: ['./set-config.component.css']
})
export class SetConfigComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];

  constructor() {
    this.actionButtons = [
      {text: 'Close'}, // no special processing here
      {text: 'I will always close', onAction: () => true}
      // {text: 'I never close', onAction: () => false}
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>) {
    // no processing needed
  }


}
