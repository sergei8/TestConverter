import {Component, OnInit, DoCheck} from '@angular/core';
import {DataService} from '../../shared/data-service';

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css']
})
export class TextTableComponent implements OnInit, DoCheck {
  public plainTextList;


  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.plainTextList = this.dataservice.testsList;
  }
}
