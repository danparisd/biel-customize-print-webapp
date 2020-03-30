import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FileSelectionComponent } from './components/file-selection/file-selection.component';
import { FormatOptionsComponent } from './components/format-options/format-options.component';
import { FilenameComponent } from './components/filename/filename.component';
import { ResultComponent } from './components/result/result.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'} },
  { path: 'file-selection', component: FileSelectionComponent, data: { breadcrumb: 'File Selection'}},
  { path: 'format-options', component: FormatOptionsComponent, data: { breadcrumb: ''}},
  { path: 'filename', component: FilenameComponent, data: { breadcrumb: ''}},
  { path: 'result', component: ResultComponent, data: { breadcrumb: ''}},
  { path: 'test', component: TestComponent, data: { breadcrumb: ''}},
  { path: 'moreBooks', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'libreOffice', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
