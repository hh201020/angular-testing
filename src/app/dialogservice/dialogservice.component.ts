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
    this.title = 'tt';
    this.message = 'mm';
  }

  openD() {
    this.dialogService.openDialog('trtrtr', 'mnmnmn');

    //document.getElementById("dialogButton").click();
  }
}
