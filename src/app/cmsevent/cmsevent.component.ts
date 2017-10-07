import { Component, OnInit } from '@angular/core';

import { CMSEvent } from './cmsevent.model';

@Component({
  templateUrl: './cmsevent.component.html',
  styleUrls: ['./cmsevent.component.scss'],
})
export class CMSEventComponent implements OnInit {
  public event: CMSEvent;

  constructor() {
    this.event = new CMSEvent();
  }

  public ngOnInit() {
  }

}
