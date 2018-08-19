import {Component, OnInit} from '@angular/core';
import {ConfigService} from './shared/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    let config = this.configService.readConfig();
    console.log(config);
// this.configService.answersNumber = 4;
  }
}
