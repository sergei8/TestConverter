import {Injectable} from '@angular/core';
import {TestItem} from './interfaces';
import {ConfigService} from './config.service';

import * as _ from 'underscore';

@Injectable()
export class DataService {

  public testsList: Array<TestItem>; // структура для вывода в браузер
  public fileName: string;  // имя конвертируемого файла (=имени резудьтатного)

  constructor(private appConfig: ConfigService) {
    this.fileName = undefined;
  }

  /**
   * Читает docx-файл, преобразует его в текстовый формат, затем в
   * структуру для вывода в окно браузера
   * Через эту функцию начинается процедура загрузки и обработки файла
   * Вызывает функции: `getFile`, `mammoth.extractRawText`, `convertToArray`, `convertToTest`
   * @return {Array<TestItem>}
   */
  async getPlainTests(file: File) {

    try {
      this.fileName = file.name;
      const plainBuffer = await this.getFile(file);

      // преобразует docx-файл в текстовый для дальнейщей его записи на диск
      const plainText = await mammoth.extractRawText({arrayBuffer: plainBuffer})
        .then(result => {
          return result.value;
        });

      const plainArray = await this.convertToArray(plainText);
      this.testsList = await this.convertToTest(plainArray);

      // если включен флаг `semanticCheck` в конфигк,то делаем семантическую проверку
      if (this.appConfig.config.semanticCheck) {
        await this.checkForErrors();
      }


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
    const fileReader: FileReader = new FileReader();

    return new Promise(resolve => {
      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsArrayBuffer(fileName);
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
      let textArray: Array<string> = plainText.split('\n');
      // преобразуем пустые строки в ''
      textArray = _.map(textArray, (x: string): string => {
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
      // for (let i = 0; i < plainArray.length; i = i + 5) {
      for (let i = 0; i < plainArray.length; i += this.appConfig.config.answersNumber + 1) {
        // инициализируем структуру
        const item: TestItem = {
          question: '',
          answers: []
        };
        // выборка вопроса
        item.question = plainArray[i];
        // выборка ответов
        for (let j = 1; j <= this.appConfig.config.answersNumber; j++) {
          item.answers.push(plainArray[i + j]);
        }
        // накопление в массиве
        test.push(item);
      }
      resolve(test);
    });
  }

  /**
   * проводит семантический анализ тестов на разного рода
   * пользовательские ошибки: нумерация ответов/вопросов, не
   * одинаковое число ответов и т.п.
   * Вызывает последовательно функции конкретного вида анализа  и
   * устанавливает для каждого айтема его статус, и статусное сообщение
   * @return {Promise<number>}
   */
  checkForErrors(): Promise<void> {
    return new Promise(() => {
      // console.log((this.testsList));
      this.testsList.forEach((item) => {
        checkForNumerating(item);
        checkForAnswers(item);
      });
    });

    /** проверка на наличие нумерации в тесте */
    function checkForNumerating(item): void {
      const mask = /[1-9а-яА-Яa-zA-Z][.)]/;
      item.statusBad = false;
      item.statusBad = item.statusBad || RegExp(mask, 'gi').test(item.question.slice(0, 5));
      item.answers.forEach((ans: string) => {
        item.statusBad = item.statusBad || RegExp(mask, 'gi').test(ans.slice(0, 2));
      });
      if (item.statusBad) {
        item.statusMessage = 'В вопросе или ответах присутуствует ненужная нумерация.\n' +
          'Вы можете убрать ее здесь или в исходном файле.';
      }
    }

    /** проверяет список ответов и, если ответ похож на вопрос - отмечает его */
    function checkForAnswers(item): void {
      item.answers.forEach((ans: string) => {
        item.statusBad = item.statusBad || ans.slice(-1) === '?';
      });
      if (item.statusBad) {
        item.statusMessage = 'Похоже, в список ответов попал тестовый вопрос';
      }
    }

  }

}



