import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ConverterService } from 'src/app/services/converter.service';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router,private converterservice:ConverterService) {  
      }

  ngOnInit() {
    console.log('>'+environment.production);
    if (environment.production) {
      console.log('enabling prod mode!');
      enableProdMode();
    }
    //platformBrowserDynamic().bootstrapModule(AppModule);
    
  }

 
}
