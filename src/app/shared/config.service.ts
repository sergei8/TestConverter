import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Config} from './interfaces';

// import {DataService} from './data-service';

@Injectable()
export class ConfigService {

  public config: Config = {};
  public isTestLoaded = false;     // индикатор загружен тест или нет (false)

  constructor(private cookieService: CookieService) {
  }

  /**
   * читает параметры конфигурации
   * @return {Object} - конфигурация приложения
   */
  readConfig(): Object {
    this.config.answersNumber = Number(this.cookieService.get('answersNumber'));
    this.config.semanticCheck = (this.cookieService.get('semanticCheck') === 'true');
    return this.config;
  }

  /**
   * сохраняет конфигурацию в куку
   */
  saveConfig(): void {
    const date = new Date();
    date.setDate(date.getDate() + 1000);   // дату надолго
    this.cookieService.set('answersNumber', this.config.answersNumber.toString(), date);
    this.cookieService.set('semanticCheck', this.config.semanticCheck.toString(), date);
    // this.dataService.getPlainTests(this.dataService.fileName);
  }

}

export const DEFAULT_ANSWERS = 4;
export const DEFAULT_SEM_CHECK = false;

