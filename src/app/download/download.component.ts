import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-download', 
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  progress=1;

  constructor(private router: Router) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })    
  }
  
  urlLink = "https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url=https://content.bibletranslationtools.org/rbnswartz/en_ulb/archive/master.zip";

  ngOnInit(): void {
    console.log('downloading book of Genesis....')
    this.router.navigateByUrl(this.urlLink) 
    console.log('got it....')
  }

}
