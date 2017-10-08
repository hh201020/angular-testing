import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { DialogServiceComponent } from './dialogservice.component';
import { DialogComponent } from './dialog-service/dialog.component';
import { DialogService } from './dialog-service/dialog.service';
import { MatDialogModule } from '@angular/material';

// routes
export const ROUTES: Routes = [
  { path: '', component: DialogServiceComponent }
];

@NgModule({
  imports: [
    MatDialogModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DialogComponent,
    DialogServiceComponent
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [
    DialogService
  ]
})
export class DialogServiceModule {}
