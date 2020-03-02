import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  paperSizes = [
    {id: 1, name: "Letter"},
    {id: 2, name: "Legal"},
    {id: 3, name: "Executive"},
    {id: 4, name: "A3"},
    {id: 5, name: "A4"}
  ];
  
  constructor(private router: Router) {
    // this.settingsForm = this.formBuilder.group({
    //   repoName: ''
    // });
   }

  ngOnInit() {
    console.log('Welcome to the dashboard...');
  }

  submitDownloadRequest(form){
    console.log("The form was submitted");
    form.reset();
    this.router.navigateByUrl('/download');
  }
}
