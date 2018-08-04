import {Injectable} from '@angular/core';
import {TestItem} from './interfaces';

@Injectable()
export class DataService {

  testsList: Array<TestItem>;

  constructor() {
        this.testsList = [{
          question: 'При роботі над помилками з СЛМ потрібно направляти зусилля на:',
          answers: ['рівномірно-послідовне навчання користувачів в процесі роботи;',
            'зниження вимог до пильності;',
            'підвищення чіткості і можливість відокремити індикатори;']
        }];
    // this.testsList = [];
    // console.log('aaaaaaaaaaaaaa');
  }

}
