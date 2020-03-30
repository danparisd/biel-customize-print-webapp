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
  height: string;
  columns: string;
  repoUrl: string;
  bookName: string;
  isValid=true;
  validFile: boolean = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder,private fileService: FileService) {
    this.fileForm = this.createFormGroup(); 
   }
   
   API_URL = "https//scripturerenderingpipelinedev.azurewebsites.net/api/RenderDoc?url="+this.repoUrl;   

   download() {
    console.log('downloading...');
    
    this.fileService.downloadFile().subscribe(response => {
      window.open(this.API_URL);
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');                
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
    // Make sure to create a deep copy of the form-model
    
    const result: File = Object.assign({}, this.fileForm.value);
    result.fileData = Object.assign({}, result.fileData);
    result.fileData.filetype=this.fileType;

    // Do useful stuff with the gathered data
    const myFile = result.fileData.filename + '.' + result.fileData.filetype;
    
    if (result.fileData.filename==''||result.fileData.filename==null) { 
      this.isValid=false;      
    } else { 
      this.isValid = /^[\w,\s-]+\.[A-Za-z0-9]{3}$/i.test(myFile);
    }
    console.log(myFile+' validity is '+this.isValid);

    if (this.isValid) {
      this.download();
      //add code to wait for above line to complete before routing to 'result'
      this.router.navigate(['result?repo_url='+this.repoUrl+'&book_id='+this.bookName],{queryParams: { file:myFile }});
    } else {
      this.router.navigateByUrl('filename?repo_url='+this.repoUrl+'&book_id='+this.bookName+'&err=true&fileType='+this.fileType);
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fileType = params['fileType'];
      this.repoUrl = params['repo_url'];
      this.bookName = params['book_id'];

      const err = params['err'];
      if (err=='true') {
        this.validFile=false;
      }  
     
      if (this.fileType=='pdf') {
        document.getElementById('filetype').innerHTML = '.PDF';    
      } else if (this.fileType=='doc') {
        document.getElementById('filetype').innerHTML = '.DOCX';    
      } else {
        document.getElementById('filetype').innerHTML = '.USFM'; 
      }
    })
    
    
  }
 
}
