import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

/* params
url
lineSpacing
direction (rtl/ltr)
align (center,right,left)
separateChapters (only set this if you want seperate chapters)
seperateVerses (same here)
fontSize
*/

  urlLink = "https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url=https://content.bibletranslationtools.org/rbnswartz/en_ulb/";

  ngOnInit(): void {
    console.log('downloading book of Genesis....')                          
    window.open(this.urlLink);
    //this.router.navigateByUrl(this.urlLink) 
    console.log('got it....')
  }

}
