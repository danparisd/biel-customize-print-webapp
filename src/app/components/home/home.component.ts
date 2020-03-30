import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FileService } from 'src/app/services/file.service';

export class Repo {
  repoData: RepoData
}

export class RepoData {
  url: string = ''
}

class StatusCheck {
  constructor(
    public status: string
  ) { }
}

export class Repository {
  url: string;
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
  //https:%2F%2Fgit.door43.org%2Fdanieldane003%2Fceb_obs_text_obs_l3&book_id=obs
  data = [];
  repoForm: FormGroup;
  validRepo: boolean = true;
  route: any;
  innerWidth: number;
  repoUrl: string;
  bookName: string;
  repository: { url: string; };
  responseStatus: number;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder,
    private fileservice: FileService, private activatedRoute: ActivatedRoute) {
    this.repoForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      this.repoUrl = params['repo_url'];
      this.bookName = params['book_id'];

      if (this.repoUrl == null) {
        this.repoUrl = '';
      } else {
        this.activateFormControls();
      }

      this.repository = {
        url: this.repoUrl
      };

      if (err == 'true') {
        this.validRepo = false;
      }
    })
  }  

  validateRepoLink() {     
      this.readRepositoryLink();
      const promise = new Promise((resolve, reject) => {
      console.log('apiUrl='+this.repoUrl); 
      this.http
        .get<StatusCheck[]>(this.repoUrl)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => {
            this.validRepo = true;
            return new StatusCheck(
              res.status
            );
          });
          resolve();
          this.router.navigateByUrl('file-selection?repo_url=' + this.repoUrl + '&book_id=' + this.bookName);
        },
          err => {
            //CORS Policy Origin blocks this causing error, Rueben will modify API to take in this value and return a true or false
            reject(err);
            if (err.status == 0) { 
              //this.router.navigateByUrl('home?err=true&repo_url=' + this.repoUrl + '&book_id=' + this.bookName); //this.validRepo=false;
              this.router.navigateByUrl('file-selection?repo_url=' + this.repoUrl + '&book_id=' + this.bookName);
            } else {
              this.validRepo = false;
              //temp disable validation until Rueben gets his endpoint built that will return true if url is valid.  Result of CORS issue
              //this.router.navigateByUrl('home?err=true&repo_url='+this.repoUrl+'&book_id='+this.bookName); //this.validRepo=false;
              this.router.navigateByUrl('file-selection?repo_url=' + this.repoUrl + '&book_id=' + this.bookName);           
            }            
          }
        );
    });
    return promise;
  }

  createFormGroup() {
    return new FormGroup({
        repoData: new FormGroup({
        url: new FormControl()
       }),      
    });
  }

  activateFormControls() {
    document.getElementById('btnRepo').style.backgroundColor = '#1D73EF';
    document.getElementById('btnRepo').style.color = '#FFFFFF';
    document.getElementById('url').style.borderColor = '#1D73EF';
  }

  readRepositoryLink() {
    const result: Repo = Object.assign({}, this.repoForm.value);
    result.repoData = Object.assign({}, result.repoData);
    this.repoUrl = result.repoData.url;
  }


}


