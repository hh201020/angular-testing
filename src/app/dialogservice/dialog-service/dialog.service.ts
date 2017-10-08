import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';
import { DialogData } from './dialog.model';

@Injectable()
export class DialogService {

  dialogResult = "";

  constructor(public dialog: MatDialog) { }

  openDialog(title: string, message: string) {
    let dialogData: DialogData = new DialogData();
    dialogData.title = title;
    dialogData.message = message;

    let dialogRef = this.dialog.open(DialogComponent, {
      position: { top: '80px', left: '80px' },
      data: dialogData
    });

    dialogRef.componentInstance.data = dialogData;

    dialogRef.componentInstance.ngOnInit();
    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

}
