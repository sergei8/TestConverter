import {Component} from '@angular/core';
import {DataService} from '../../../../shared/data-service';
import {ConfigService} from '../../../../shared/config.service';
import {async} from 'q';

@Component({
  selector: 'app-input-reader',
  templateUrl: './input-file-reader.component.html'
})

export class InputFileReaderComponent {

  constructor(private dataservice: DataService,
              private configService: ConfigService) {
  }

  /**
   * при выборе файла в <input> инициирует процесс его преобразования
   * в табличную форму согласно структуре TestItem
   * @param $event - содержит ссылку на файловый объект
   */
  fileSelected($event: any): void {
    async(this.dataservice.getPlainTests($event.target.files[0]));
    this.configService.isTestLoaded = true;   //  тест загружен
    // console.log('******', this.configService.isTestLoaded);
  }

}
