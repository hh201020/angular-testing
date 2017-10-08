import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog-service/dialog.service';

@Component({
  selector: 'dialog-service',
  templateUrl: './dialogservice.component.html',
  styleUrls: ['./dialogservice.component.css']
})
export class DialogServiceComponent implements OnInit {
  title = 'app';
  message = 'mm';

  constructor(
    private dialogService: DialogService,
  ) {}

  public ngOnInit() {
  }

  openD() {
    this.title = 'Input Title';
    this.message = 'Input Message';
    this.dialogService.openDialog(this.title, this.message);
  }
}
