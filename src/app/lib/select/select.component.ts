import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  defaultConfig;
  open = false;

  @Input() name: string;
  @Input() selected: any;
  @Input() options: any[];
  @Input() config: {option?: {value?: string, text?: string}};

  @Output() change = new EventEmitter();

  constructor() {
    this.defaultConfig = {
      option: {
        value: 'id',
        text: 'name'
      }
    };
  }

  ngOnInit() {
    this.config = Object.assign({}, this.defaultConfig, this.config);
  }

  select(option: any) {
    this.selected = option;
    this.change.emit(option);
    this.close();
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  show() {
    this.open = true;
  }
}
