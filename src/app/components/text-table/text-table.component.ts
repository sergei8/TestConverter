import {Component} from '@angular/core';
import {DataService} from '../../shared/data-service';

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css']
})
<<<<<<< HEAD
export class TextTableComponent {
=======
export class TextTableComponent implements DoCheck {
>>>>>>> Edit-test
  public plainTestsList;


  constructor(private dataservice: DataService) {
  }

  ngDoCheck() {
    // this.plainTestsList = this.dataservice.testsList;
  }

}
