import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// containers
import { ExcelComponent } from './excel.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: ExcelComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ExcelComponent
  ]
})
export class ExcelModule {}
