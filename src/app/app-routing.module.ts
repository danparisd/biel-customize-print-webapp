import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { SummaryComponent } from './summary/summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'download', component: DownloadComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'moreBooks', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'libreOffice', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
