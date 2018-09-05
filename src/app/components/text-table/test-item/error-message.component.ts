import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <sat-popover #p >
      <div class="tooltip-wrapper">
        Multi-line <br> <i>Tooltip</i>
      </div>
    </sat-popover>
  `,
  styleUrls: ['error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
