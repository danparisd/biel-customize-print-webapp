import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { isNullOrUndefined } from 'util';
import { ElementSchemaRegistry } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-format-options',
  templateUrl: './format-options.component.html',
  styleUrls: ['./format-options.component.css']
})
export class FormatOptionsComponent implements OnInit {

  fileType: string;
  height: number = 1;
  columns: number = 1;
  repoUrl: string;
  bookName: string;
  chapters:  string;
  verses:  string;
  filename: string;  
  tempht: number;
  tempcols: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      this.repoUrl = params['url'];
      this.bookName = params['book_name'];
      this.fileType = params['file_type'];
      this.height = params['height'];
      this.columns = params['columns'];
      this.verses = params['verses'];
      this.chapters = params['chapters'];
      this.filename = params['file_name'];

      this.tempht=1;
      this.tempcols=1;

      if (isNullOrUndefined(this.filename)) { 
        this.filename='download.'+this.fileType; }        
      if (isNullOrUndefined(this.height)) {
        this.height=1.0; }
      if (isNullOrUndefined(this.columns)) {
        this.columns=1.0; }      
      if (isNullOrUndefined(this.verses)) {
        this.verses='N'; }
      if (isNullOrUndefined(this.chapters)) {
         this.chapters='N';  } 
      if (this.verses=='Y') {  
         const v_ele = document.getElementById("verses") as HTMLInputElement;
         v_ele.checked = true;   
         this.verses='Y';
       } else { 
         const v_ele = document.getElementById("verses") as HTMLInputElement;
         v_ele.checked = false; 
         this.verses='N';
       } 
      if (this.chapters=='Y') { 
        const c_ele = document.getElementById("chapters") as HTMLInputElement;
        c_ele.checked = true;  
        this.chapters='Y';
      } else {       
        const c_ele = document.getElementById("chapters") as HTMLInputElement;
        c_ele.checked = false;
        this.chapters='N';
      } 
    });    
  }

  onSubmit() { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.router.navigate(['filename'], { queryParams: {url: this.repoUrl, book_name: this.bookName, file_type: this.fileType, file_name: this.filename, height: this.height, columns: this.columns, verses: this.verses, chapters: this.chapters } });
    })
  }

  goBack() {
    this.router.navigate(['file-selection'], { queryParams: {url: this.repoUrl, book_name: this.bookName, file_type: this.fileType, file_name: this.filename, height: this.height, columns: this.columns, verses: this.verses, chapters: this.chapters } });
  }

  incrementHeight() { 
    if (this.height >= .5 && this.height < 2.0) {
      this.tempht = this.tempht + .5;
      this.height=this.tempht;
    }    
  }

  decrementHeight() { 
    if (this.height > .5) {
      this.tempht = this.tempht - .5;
      this.height = this.tempht;
    }
  }

  incrementColumns() {
    this.tempcols = this.tempcols + 1.0;
    this.columns = this.tempcols;
  }

  decrementColumns() {
    if (this.columns > 1) {
      this.tempcols = this.tempcols - 1.0;
      this.columns = this.tempcols;
    }
  }

  setVersesBreak() {
    if (this.verses=='Y') {
      const v_ele = document.getElementById("verses") as HTMLInputElement;
      v_ele.checked = false;
      this.verses='N';
    } else {
      const v_ele = document.getElementById("verses") as HTMLInputElement;
      v_ele.checked = true;
      this.verses='Y';
    }
  }

  setChaptersBreak() {  
    if (this.chapters=='Y') {
      const c_ele = document.getElementById("chapters") as HTMLInputElement;
      c_ele.checked = false;
      this.chapters='N';
    } else {
      const c_ele = document.getElementById("chapters") as HTMLInputElement;
      c_ele.checked = true;
      this.chapters='Y';
    }
  }

}
