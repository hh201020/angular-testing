import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { ExcelComponent } from './excel.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: ExcelComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ExcelComponent
  ]
})
export class ExcelModule {}
