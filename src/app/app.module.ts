import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DownloadComponent } from './download/download.component';
import { SummaryComponent } from './summary/summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

 
@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    SummaryComponent,
    DashboardComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
