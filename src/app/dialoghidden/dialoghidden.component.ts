import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './dialoghidden.component.html',
  styleUrls: ['./dialoghidden.component.css']
})
export class DialogHiddenComponent implements OnInit {
  title = 'app';
  message = 'mm';

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }

  public ngOnInit() {
  }

  openD() {
    this.title = 'Input Title';
    this.message = 'Input Message';
    this.ref.detectChanges();

    document.getElementById("dialogButton").click();
  }
}
