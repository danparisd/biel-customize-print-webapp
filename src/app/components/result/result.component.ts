import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      const url = params['url'];
      const filename = params['file_name'];
      //this.router.navigateByUrl('https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url='+filename);
      //window.open('https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url='+url+'&filename='+filename);
    });    
  }

}
