import {Component} from '@angular/core';
import {DataService} from '../../../shared/data-service';
import {saveAs} from 'file-saver/FileSaver';

@Component({
  selector: 'app-save-test',
  templateUrl: './save-test.component.html',
  styleUrls: ['./save-test.component.css']
})
export class SaveTestComponent {

  constructor(private dataservice: DataService) {
  }

  /**
   * Сохраняет отконвертированный в GIFT файл на локальный диск
   */
  saveFile() {
    const test: Object = this.convertToMoodle();
    // console.log(test);
    const file = new Blob([test], {type: 'text\plain'});
    const testFileName = this.dataservice.fileName.split('.')[0] + '.txt';
    saveAs(file, testFileName);
  }

  /**
   * Конвертирует структуру `testsList` в GIFT формат
   * @return {string} текстовая строка в GIFT-формате
   */
  convertToMoodle(): string {
    let test = '';
    this.dataservice.testsList.forEach(item => {
      const question = `:: ${this.escapeSpesialSymbols(item.question)}`;
      let answers = `=${this.escapeSpesialSymbols(item.answers[0])}\n`;  //  правильный ответ - первый!
      for (let i = 1; i < item.answers.length; i++) {
        answers += `~${this.escapeSpesialSymbols(item.answers[i])}\n`;
      }
      test += `${question}{\n${answers}}\n\n\n`;
    });
    return test;
  }

  /** Экранирует слешом (\) специальные символы формата GIFT
   *
   * @param {string} item - анализируемая строка
   * @return {string} - выходная строка с экранированными спецсимволами
   */
  private escapeSpesialSymbols(item: string): string {
    const mask = ['\}', '\{', '\~', '\=', '\]'];
    // проход по всем символам маски и их экранизация в строке `item`
    mask.forEach(symbol => {
      const regExp = new RegExp(symbol, 'gi');
      item = item.replace(regExp, `\\${symbol}`);
    });
    return item;
  }

}
