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

  testUrl = 'https://git.door43.org/door43-catalog/ceb_obs';
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
      this.bookName = params['book_name'];

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
      if (this.repoUrl.length==0) {
        return;
      }
      const promise = new Promise((resolve, reject) => {
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
          this.router.navigateByUrl('file-selection?url=' + this.repoUrl + '&book_name=' + this.bookName);
        },
          err => {            
            reject(err);
            if (err.status != 200) { 
              this.router.navigateByUrl('home?err=true&repo_url=' + this.repoUrl + '&book_name=' + this.bookName); 
              this.validRepo=false;
            } else {
              this.router.navigateByUrl('file-selection?url=' + this.repoUrl + '&book_name=' + this.bookName);           
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


