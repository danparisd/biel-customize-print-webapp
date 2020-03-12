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
import { ConverterService } from 'src/app/services/converter.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileSelectionComponent,
    FormatOptionsComponent,
    FilenameComponent,
    ResultComponent,
    BreadcrumbComponent,
    ResultComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
