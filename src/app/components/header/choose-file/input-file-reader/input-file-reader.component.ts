import {Component} from '@angular/core';
import {DataService} from '../../../../shared/data-service';

@Component({
  selector: 'app-input-reader',
  templateUrl: './input-file-reader.component.html'
})

export class InputFileReaderComponent {

  constructor(public dataservice: DataService) {
  }

  /**
   * при выборе файла в <input> инициирует процесс его преобразования
   * в табличную форму согласно структуре TestItem
   * @param $event - содержит ссылку на файловый объект
   */
  fileSelected($event: any): void {
    this.dataservice.getPlainTests($event.target.files[0]);
  }

}
