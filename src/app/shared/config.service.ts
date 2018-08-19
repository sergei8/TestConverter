import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  public answersNumber: number;  // количество ответов
  public semanticCheck: boolean; // семантическая проверка

  constructor() {
    this.answersNumber = 4;
    this.semanticCheck = false;
  }
}

