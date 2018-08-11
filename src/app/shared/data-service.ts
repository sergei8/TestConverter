import {Injectable} from '@angular/core';
import {TestItem} from './interfaces';
import * as _ from 'underscore';

@Injectable()
export class DataService {

  public testsList: Array<TestItem>;
  public plainText: any;

  constructor() {
  }

  /**
   *
   * @return {Array<TestItem>}
   */
  async getPlainTests(fileName: File) {
    // прочитать выбранный в fileName docx-файл

    try {
      const plainBuffer = await this.getFile(fileName);
      const plainText = await mammoth.extractRawText({arrayBuffer: plainBuffer})
        .then(result => {
          // console.log(result.value);
          return result.value;
        });
      const plainArray = await this.convertToArray(plainText);
      console.log(plainArray);
      this.testsList = await this.convertToTest(plainArray);
      console.log(this.testsList);
      this.plainText = plainArray;

    } catch (e) {
      console.log(e.message);
    }
  }

  /**
   * Читает асинхронно локальный файл и отдает его контент через промис
   * @param {File} fileName - файловый объект
   * @return {Promise<any>} - промис c resolve=контенту файла
   */
  getFile(fileName: File): Promise<File> {
    // const file: File = fileName;
    const fileReader: FileReader = new FileReader();

    return new Promise(resolve => {
      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsArrayBuffer(fileName);
      // fileReader.readAsText(file);
    });
  }

  /**
   * преобразует текстовую строку в массив по разделителю `перевод строки`
   * @param plainText - строка
   * @return {Promise<any>} в промисе возвращает массив с вопросами-ответами
   */
  convertToArray(plainText: string): Promise<string[]> {
    return new Promise(resolve => {
      // делаем массив
      let textArray = plainText.split('\n');
      // преобразуем пустые строки в ''
      textArray = _.map(textArray, (x) => {
        return x.trim().length === 0 ? '' : x;
      });
      // возвращаем сжатый массив
      resolve(_.compact(textArray));
    });
  }

  /**
   * преобразует массив вопросов-ответов в массив руктуры TestItem
   * распределяет ответы согласно параметра в appConfig.answersNumber
   * @param plainArray - линейный массив вопросов-ответов
   * @return {Promise<any>} через промис возвращает структурированный тест
   */
  convertToTest(plainArray: string[]): Promise<TestItem[]> {
    return new Promise(resolve => {
      const test = [];

      // проход по линейному массиву
      for (let i = 0; i < plainArray.length; i = i + 5) {
        // инициализируем структуру
        const item: TestItem = {
          question: '',
          answers: []
        };
        // выборка вопроса
        item.question = plainArray[i];
        // выборка ответов
        for (let j = 1; j <= appConfig.answersNumber; j++) {
          item.answers.push(plainArray[i + j]);
        }
        // накопление в массиве
        test.push(item);
      }
      resolve(test);
    });
  }

}

export const appConfig = {
  answersNumber: 4
};




