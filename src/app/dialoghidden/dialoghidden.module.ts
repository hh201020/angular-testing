import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';

// containers
import { DialogHiddenComponent } from './dialoghidden.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
// routes
export const ROUTES: Routes = [
  { path: '', component: DialogHiddenComponent }
];

@NgModule({
  imports: [
    MatDialogModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DialogHiddenComponent,
    DialogDemoComponent,
    MyDialogComponent,
  ],
  entryComponents: [
    MyDialogComponent,
  ],
})
export class DialogHiddenModule {}
