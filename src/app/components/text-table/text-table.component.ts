import {Component} from '@angular/core';
import {DataService} from '../../shared/data-service';

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css']
})
export class TextTableComponent {
  // public plainTestsList;

  constructor(private dataservice: DataService) {
  }


}
