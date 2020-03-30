import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {
  
  API_URL = "https//scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url=https://content.bibletranslationtools.org/rbnswartz/en_ulb/";

  constructor(private http: Http) { }
  /* params
  url
  lineSpacing
  direction (rtl/ltr)
  align (center,right,left)
  separateChapters (only set this if you want seperate chapters)
  seperateVerses (same here)
  fontSize
  */
  downloadFile(): Observable<any> {
    return this.http.get(this.API_URL, { responseType: ResponseContentType.Blob });
  }

  ngOnInit() {

  }





}