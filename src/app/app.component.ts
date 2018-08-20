import {Component, OnInit} from '@angular/core';
import {ConfigService, DEFAULT_ANSWERS, DEFAULT_SEM_CHECK} from './shared/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigService) {

  }

  /**
   *   при инициадизации приложения проверяем есть ли в куках
   *  конфиг. Если нет, устанавливаем по умолчанию и сохраняем
   *  если есть - то в readConfig они установятся и станут теущими
   */
  ngOnInit() {
    const config = this.configService.readConfig();
    if (config === undefined) {
      this.configService.config.answersNumber = DEFAULT_ANSWERS;
      this.configService.config.semanticCheck = DEFAULT_SEM_CHECK;
      this.configService.saveConfig();
    }
  }
}
