import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Config} from './interfaces';

@Injectable()
export class ConfigService {

  public config: Config = {};

  constructor(private cookieService: CookieService) {
  }

  readConfig() {
    this.config.answersNumber = Number(this.cookieService.get('answersNumber'));
    this.config.semanticCheck = (this.cookieService.get('semanticCheck') === 'true');
  }

  saveConfig(): void {
    this.cookieService.set('answersNumber', this.config.answersNumber.toString());
    this.cookieService .set('semanticCheck', this.config.semanticCheck.toString());
    console.log('config saved');
  }

  setConfig(answersNumber: string, semanticCheck: string): void {
    // this.answersNumber = parseInt(answersNumber);
    // this.semanticCheck = (semanticCheck === 'true');
    // this.saveConfig();
  }

}

export const DEFAULT_ANSWERS = 4;
export const DEFAULT_SEM_CHECK = false;

