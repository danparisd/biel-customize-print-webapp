import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-format-options',
  templateUrl: './format-options.component.html',
  styleUrls: ['./format-options.component.css']
})
export class FormatOptionsComponent implements OnInit {
   
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  fileType = new FormControl('');
  height: number = 1;
  columns: number = 1;
 
  ngOnInit(): void {  
  }

  incrementHeight() { 
    if (this.height>=.5 && this.height<2.0) {
      this.height=this.height+.5;
    }
  }

  decrementHeight() { 
    if (this.height>.5) {
      this.height=this.height-.5;
    }
  }

  incrementColumns() { 
    this.columns=this.columns+1;
  }

  decrementColumns() { 
    if (this.columns>1) {
      this.columns=this.columns-1;
    }
 }

 onSubmit() { 
  this.activatedRoute.queryParams.subscribe(params => {
    const ft = params['fileType'];
    this.fileType=ft;    
    this.router.navigate(['filename'],{queryParams: { fileType:params['fileType']}});
  })
 }
}
