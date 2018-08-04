import {Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/data-service';

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css']
})
export class TextTableComponent implements OnInit {
  plainTextList;


  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    this.getPlainTests();
  }

  /**
   * обращается к dataservice за получением текстового варианта теста
   */
  getPlainTests() {
    this.plainTextList = this.dataservice.getPlainTests();
    console.log(this.plainTextList);
  }
}
