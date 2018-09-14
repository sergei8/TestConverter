
import {Component, Input} from '@angular/core';
import {TestItem} from '../../../shared/interfaces';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html?v=1.0',
  styleUrls: ['./test-item.component.css?v=1.0']
})
export class TestItemComponent {
  @Input() testItem: TestItem;
  @Input() number: number;
  showError: boolean;

  /* для включение/выключение поповера c тестом ошибки */

  constructor() {
  }

  /**
   * меняет конртент ответа, когда с экрана сделана корректировка
   * @param event - параметры события `change`
   * @param i - порядковый номер ответа
   */
  public changeAnswer(event: any, i: number): void {
    this.testItem.answers[i] = event.target.value;
  }

  public setItemClass(statusBad: boolean): string {
    let itemClass = 'test-item';
    if (statusBad) {
      itemClass = 'test-item-err';
    }
    return itemClass;
  }

  //todo сделать автофит под размер окна - пока не используется
/*
  public adjustTextSize(textLengh: number): string {
    // console.log(textLengh);
    // console.log(window.innerWidth);
    return '500px';
  }
*/

  showErrorPopover(message): void {
    this.showError = !this.showError;
  }
}
