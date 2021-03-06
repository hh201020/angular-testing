import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'excel', loadChildren: './excel/excel.module#ExcelModule' },
  { path: 'detail', loadChildren: './detail#DetailModule'},
  { path: 'barrel', loadChildren: './barrel#BarrelModule'},
  { path: 'cmsevents', loadChildren: './cmsevent/cmsevent.module#CMSEventModule' },
  { path: 'dialoghidden', loadChildren: './dialoghidden/dialoghidden.module#DialogHiddenModule' },
  { path: 'dialogservice', loadChildren: './dialogservice/dialogservice.module#DialogServiceModule' },
  { path: '**',    component: NoContentComponent },
];
