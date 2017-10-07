import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { CMSEventComponent } from './cmsevent.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: CMSEventComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CMSEventComponent
  ]
})
export class CMSEventModule {}
