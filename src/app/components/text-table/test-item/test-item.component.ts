import {Component, Input} from '@angular/core';
import {TestItem} from '../../../shared/interfaces';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css']
})
export class TestItemComponent {
  @Input() testItem: TestItem;
  @Input() number: number;

  constructor() {
  }


}
