import {Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/data-service';

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css']
})
export class TextTableComponent implements OnInit {
  planeTextTable;


  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    this.planeTextTable = this.dataservice.testsList[0].question;
    // console.log(this.planeTextTable);

  }

}
