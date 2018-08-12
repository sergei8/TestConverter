import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../shared/data-service';
import {saveAs} from 'file-saver/FileSaver';

@Component({
  selector: 'app-save-test',
  templateUrl: './save-test.component.html',
  styleUrls: ['./save-test.component.css']
})
export class SaveTestComponent implements OnInit {

  constructor(private dataservice: DataService) {
  }

  saveFile() {
    console.log(this.dataservice.testsList);
    const proba: any = this.dataservice.plainText;
    const blob = new Blob([proba], {type: 'text\plain'});
    const testFileName = this.dataservice.fileName.split('.')[0] + '.txt';
    saveAs(blob, testFileName);
  }

  ngOnInit() {
  }

}
