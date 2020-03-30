import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './components/home/home.component';
import { FileSelectionComponent } from './components/file-selection/file-selection.component';
import { FormatOptionsComponent } from './components/format-options/format-options.component';
import { FilenameComponent } from './components/filename/filename.component';
import { ResultComponent } from './components/result/result.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FileService } from 'src/app/services/file.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileSelectionComponent,
    FormatOptionsComponent,
    FilenameComponent,
    ResultComponent,
    BreadcrumbComponent,
    ResultComponent,
    TestComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ], 
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
