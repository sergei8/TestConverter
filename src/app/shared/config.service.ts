import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class ConfigService {
  public answersNumber: number;  // количество ответов
  public semanticCheck: boolean; // семантическая проверка

  constructor() {

    this.answersNumber = 4;
    this.semanticCheck = false;
  }

  readConfig(){
    // console.log('config: ');
  }
  saveConfig(){
    console.log('config saved');
  }
}

