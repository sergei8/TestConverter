import {Component, OnInit, ElementRef} from '@angular/core';
import {DataService} from '../../../shared/data-service';
import {InputFileReaderComponent} from './input-file-reader/input-file-reader.component';

@Component({
  selector: 'app-choose-file',
  templateUrl: './choose-file.component.html',
  styleUrls: ['./choose-file.component.css']
})
export class ChooseFileComponent implements OnInit {

  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    // this.dataservice.getPlainTests('docfile.doc');
  }

  /**
   * обращается к dataservice за получением сериализованного варианта теста
   */
  getPlainTests(fileName) {
    // this.dataservice.testsList = this.dataservice.getPlainTests(fileName);
    // console.log(this.dataservice.testsList);
  }

}
