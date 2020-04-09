import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { FileService } from 'src/app/services/file.service';

export class File {
  fileData: FileData
  requestType: any = ''
  text: string = ''
}

export class FileData {
  filename: string = ''
  filetype: string = ''
}

@Component({
  selector: 'app-filename',
  templateUrl: './filename.component.html',
  styleUrls: ['./filename.component.css']
})
export class FilenameComponent implements OnInit {

  fileForm: FormGroup;
  fileType: string;
  fileName: string;
  height: string;
  columns: string;
  repoUrl: string;
  bookName: string;
  verses: string;
  chapters: string;
  isValid=true;
  validFile: boolean = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder,private fileService: FileService) {
    this.fileForm = this.createFormGroup(); 
   }
   
   createFormGroup() {
    return new FormGroup({
      fileData: new FormGroup({
        filename: new FormControl(),
        filetype: new FormControl()
       }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      fileData: formBuilder.group({
        filename: '',
        filetype: ''
      }),
      requestType: '',
      text: ''
    });
  }

  onSubmit() {    
    
    const result: File = Object.assign({}, this.fileForm.value);
    result.fileData = Object.assign({}, result.fileData);
    result.fileData.filetype=this.fileType;

    // Do useful stuff with the gathered data
    const myFile = result.fileData.filename + '.' + result.fileData.filetype; 
    const API_URL = "https://scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url="+this.repoUrl+"&file_type=&book_name="+this.bookName+"&filename="+myFile+"&verses="+this.verses+"&chapters="+this.chapters;   
    
    if (result.fileData.filename==''||result.fileData.filename==null) { 
      this.isValid=false;      
    } 
    
    if (this.isValid) {
      window.open(API_URL);
      this.router.navigate(['result'], { queryParams: {url: this.repoUrl, book_name: this.bookName, file_type: this.fileType, height: this.height, columns: this.columns, file_name: myFile, verses: this.verses, chapters: this.chapters } });
    } else {
      this.router.navigate(['filename'], { queryParams: {err: 'invalid', url: this.repoUrl, book_name: this.bookName, file_type: this.fileType, height: this.height, columns: this.columns, file_name: result.fileData.filename, verses: this.verses, chapters: this.chapters } });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fileType = params['file_type'];
      this.repoUrl = params['url'];
      this.bookName = params['book_name'];
      this.height = params['height'];
      this.columns = params['columns'];
      this.fileName = params['file_name'];
      this.verses = params['verses'];
      this.chapters = params['chapters'];
      this.isValid = true;
      const err = params['err'];
      if (err=='invalid') {
        this.validFile=false;
      }  
      console.log('fn='+this.fileName);
     
      if (this.fileType=='pdf') {
        document.getElementById('filetype').innerHTML = '.PDF';    
      } else if (this.fileType=='docx') {
        document.getElementById('filetype').innerHTML = '.DOCX';    
      } else {
        document.getElementById('filetype').innerHTML = '.USFM'; 
      }

    })
  }

  goBack() {
    const result: File = Object.assign({}, this.fileForm.value);
    result.fileData = Object.assign({}, result.fileData);
    const myFile = result.fileData.filename + '.' + this.fileType; 
    this.router.navigate(['format-options'], { queryParams: {url: this.repoUrl, book_name: this.bookName, file_type: this.fileType, height: this.height, columns: this.columns, file_name: myFile, verses: this.verses, chapters: this.chapters } });
  }
 
}
