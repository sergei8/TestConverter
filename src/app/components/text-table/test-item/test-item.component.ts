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


  /**
   * меняет значение ответа
   * @param event - параметры события `change`
   * @param i - индекс ответа
   */
  public changeAnswer(event: any, i: number): void {
    // console.log(event.target.value, i);
    this.testItem.answers[i] = event.target.value;
  }

  public adjustTextSize(textLengh: number): string {
    console.log(textLengh);
    console.log(window.innerWidth);
    return '500px';
  }

}
