import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'biel-webapp';
  
  constructor(private router: Router) {  
  }

  ngOnInit() {
    console.log('Welcome...');
  }
  
}
