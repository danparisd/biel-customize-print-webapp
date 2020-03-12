import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}

@Injectable()
export class ConverterService {
 
  api: string = "https://jsonplaceholder.typicode.com/posts";
  data = [];

  constructor(private http: HttpClient) { }

    //Wycliffe Content Server
    urlWcsLink = 'https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url=https://content.bibletranslationtools.org/rbnswartz/en_ulb';
    //Door43 Content Server
    urlDcsLink = 'https://git.door43.org/user/repoid';
    //url = 'https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url=https://content.bibletranslationtools.org/rbnswartz/en_ulb';
    //url = 'http://localhost:4200';
  
  validateRepoLink() { 
    const validUrl = true;    
    const promise = this.http.get(this.urlDcsLink).toPromise();  
    promise.then((data)=>{ 
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{ 
      console.log('!!:'+error.status);
      console.log("Promise rejected with " + JSON.stringify(error));
    });
    
    console.log('done!');
  } 

  ngOnInit() {
    //this.getPosts();
  }

  getPosts() {
    console.log('in getPosts()');
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => { console.log('success..');
            return new Post(
              res.userId,
              res.id,
              res.title,
              res.body
            );
          });
          resolve();
        },
          err => { console.log('err');
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }


}