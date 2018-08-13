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
    const test: any = this.convertToMoodle();
    console.log(test);
    const blob = new Blob([test], {type: 'text\plain'});
    const testFileName = this.dataservice.fileName.split('.')[0] + '.txt';
    saveAs(blob, testFileName);
  }

  ngOnInit() {
  }

  /**
   *
   * @return {string}
   */
  convertToMoodle(): string {
    let test = '';
    this.dataservice.testsList.forEach(item => {
      const question = `:: ${item.question}`;
      let answers = `=${item.answers[0]}\n`;
      for (let i = 1; i < item.answers.length; i++) {
        answers += `~${item.answers[i]}\n`;
      }
      test += `${question}\n { ${answers} }\n`;
    });
    return test;
  }


}
