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
   * меняет значение ответа, когда с экрана сделана корректировка
   * @param event - параметры события `change`
   * @param i - порядковый номер ответа
   */
  public changeAnswer(event: any, i: number): void {
    this.testItem.answers[i] = event.target.value;
  }

  //todo сделать автофит под размер окна - пока не используется
  public adjustTextSize(textLengh: number): string {
    console.log(textLengh);
    console.log(window.innerWidth);
    return '500px';
  }

}
