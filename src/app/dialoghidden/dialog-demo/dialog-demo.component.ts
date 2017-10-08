import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import { DialogData } from './dialog.model';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult = "";
  dialogData: DialogData = new DialogData();

  constructor(public dialog: MatDialog) { }
  @Input() title: string;
  @Input() message: string;

  ngOnInit() {
  }

  openDialog() {
    this.dialogData.title = this.title;
    this.dialogData.message = this.message;

    let dialogRef = this.dialog.open(MyDialogComponent, {
      disableClose: true,
      panelClass: '',
      hasBackdrop: true,
      backdropClass: '',
      width: '400px',
      height: '800px',
      data: this.dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

}
