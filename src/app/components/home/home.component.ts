import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConverterService } from 'src/app/services/converter.service';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string,
    public status: string
  ) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  //Dummy Test - returns data so valid
  api: string = "https://jsonplaceholder.typicode.com/posts";
  //WCS api: string = 'https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url=https://content.bibletranslationtools.org/rbnswartz/en_ulb';
  //DCS api: string = 'https://git.door43.org/user/repoid';
  data = [];
  angForm: FormGroup;
  validRepo: boolean = true;
  route: any;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder,
    private converterservice: ConverterService, private activatedRoute: ActivatedRoute) { 
      this.createForm();
    }
 
  ngOnInit(): void {  
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      if (err=='true') {
        this.validRepo=false;
      }  
    })
  }
    
  createForm() {
    this.angForm = this.fb.group({
       url: ['', Validators.required ]
    });
  
  }

  validateRepoLink(event: Event) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success  --Post Model is dummy temp data for testing purposes
          this.data = res.map((res: any) => { 
            this.validRepo=true;
            return new Post(
              res.userId,
              res.id,
              res.title,
              res.body,
              res.status
            );
          });
          resolve();
          this.router.navigateByUrl('file-selection');          
        },
          err => { 
            // Error
            reject(err);
            this.router.navigateByUrl('home?err=true');
            this.validRepo=false;
          }
        );
    });
    return promise;
  }

}


