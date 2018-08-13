import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  public answersNumber: number;

  constructor() {
    this.answersNumber = 4;
  }
}

