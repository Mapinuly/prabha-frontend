import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { DataEntryComponent } from './pages/data-entry/data-entry.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'partner',
    component: PartnersComponent,
  },
  {
    path: 'data-entry',
    component: DataEntryComponent,
  },
];
