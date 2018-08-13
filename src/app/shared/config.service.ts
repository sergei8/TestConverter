import {Injectable} from '@angular/core';

/**
 * Настройка параметров приложения
 */
@Injectable()
export class ConfigService {
  public answersNumber: number;   // количестов ответов в тесте
  public semanticCheck: boolean;  // делать ли семантический анализ

  constructor() {
    this.answersNumber = 4;
  }
}

