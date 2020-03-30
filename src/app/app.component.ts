import { enableProdMode } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FileService } from 'src/app/services/file.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router,private fileservice:FileService) {  
      }

  ngOnInit() {
    if (environment.production) {
      console.log('enabling prod mode!');
      enableProdMode();
    }
    
  }

 
}
