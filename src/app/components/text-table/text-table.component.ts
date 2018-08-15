import {Component, DoCheck} from '@angular/core';
import {DataService} from '../../shared/data-service';

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css']
})
export class TextTableComponent implements DoCheck {
  public plainTestsList;


  constructor(private dataservice: DataService) {
  }

  ngDoCheck() {
    this.plainTestsList = this.dataservice.testsList;
  }

}
