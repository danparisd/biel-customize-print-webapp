import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.css']
})
export class FileSelectionComponent implements OnInit {

  repoUrl: string;
  bookName: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  fileType = new FormControl('');

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      this.repoUrl = params['url'];
      this.bookName = params['book_name'];
    });
    this.handleDocClick();
  }

  onSubmit() {
    this.router.navigate(['format-options'],{queryParams: {url:this.repoUrl,book_name:this.bookName,file_type: this.fileType.value } });
  }

  handlePdfClick() {
    document.getElementById('pdf-parent').style.backgroundColor = '#CEE6FF';
    document.getElementById('pdf-left').style.backgroundColor = '#CEE6FF';
    document.getElementById('pdf-right').style.backgroundColor = '#CEE6FF';
    document.getElementById('doc-parent').style.backgroundColor = '#FFFFFF';
    document.getElementById('doc-left').style.backgroundColor = '#FFFFFF';
    document.getElementById('doc-right').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-parent').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-left').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-right').style.backgroundColor = '#FFFFFF';
    document.getElementById('pdf-sub-text').style.display = 'block';
    document.getElementById('doc-sub-text').style.display = 'none';
    document.getElementById('usfm-sub-text').style.display = 'none';
    document.getElementById('pdf-parent').style.height = '130px';
    document.getElementById('doc-parent').style.height = '50px';
    document.getElementById('usfm-parent').style.height = '50px';
    document.getElementById('image-pdf').innerHTML = '<img src="/assets/img/pdf_selected.png" width="20" height="24"/>';
    document.getElementById('image-doc').innerHTML = '<img src="/assets/img/file-word.png"/>';
    document.getElementById('image-usfm').innerHTML = '<img src="/assets/img/usfm.png" width="20" height="15"/>';
    document.getElementById('pdf_checked').innerHTML = '<img src="assets/img/radio_checked.png" width="20" height="20"/>';
    document.getElementById('doc_checked').innerHTML = '<img src="assets/img/radio_unchecked.png" width="20" height="20"/>';
    document.getElementById('usfm_checked').innerHTML = '<img src="assets/img/radio_unchecked.png" width="20" height="20"/>';
    document.getElementById('label-pdf-text').style.color = '#015AD9';
    document.getElementById('label-pdf-text').style.fontWeight = '700';
    document.getElementById('label-doc-text').style.color = '#565656';
    document.getElementById('label-doc-text').style.fontWeight = '400';
    document.getElementById('label-usfm-text').style.color = '#565656';
    document.getElementById('label-usfm-text').style.fontWeight = '400';
    this.fileType.setValue('pdf');
  }

  handleDocClick() {
    document.getElementById('doc-parent').style.backgroundColor = '#CEE6FF';
    document.getElementById('doc-left').style.backgroundColor = '#CEE6FF';
    document.getElementById('doc-right').style.backgroundColor = '#CEE6FF';
    document.getElementById('pdf-parent').style.backgroundColor = '#FFFFFF';
    document.getElementById('pdf-left').style.backgroundColor = '#FFFFFF';
    document.getElementById('pdf-right').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-parent').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-left').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-right').style.backgroundColor = '#FFFFFF';
    document.getElementById('doc-sub-text').style.display = 'block';
    document.getElementById('pdf-sub-text').style.display = 'none';
    document.getElementById('usfm-sub-text').style.display = 'none';
    document.getElementById('doc-parent').style.height = '130px';
    document.getElementById('pdf-parent').style.height = '50px';
    document.getElementById('usfm-parent').style.height = '50px';
    document.getElementById('image-pdf').innerHTML = '<img src="/assets/img/pdf.png" width="20" height="24"/>';
    document.getElementById('image-doc').innerHTML = '<img src="/assets/img/file-word-selected.png" />';
    document.getElementById('image-usfm').innerHTML = '<img src="/assets/img/usfm.png" width="20" height="15"/>';
    document.getElementById('pdf_checked').innerHTML = '<img src="assets/img/radio_unchecked.png" width="20" height="20"/>';
    document.getElementById('doc_checked').innerHTML = '<img src="assets/img/radio_checked.png" width="20" height="20"/>';
    document.getElementById('usfm_checked').innerHTML = '<img src="assets/img/radio_unchecked.png" width="20" height="20"/>';
    document.getElementById('label-doc-text').style.color = '#015AD9';
    document.getElementById('label-doc-text').style.fontWeight = '700';
    document.getElementById('label-pdf-text').style.color = '#565656';
    document.getElementById('label-pdf-text').style.fontWeight = '400';
    document.getElementById('label-usfm-text').style.color = '#565656';
    document.getElementById('label-usfm-text').style.fontWeight = '400';
    this.fileType.setValue('docx');
  }

  handleUsfmClick() {
    document.getElementById('usfm-parent').style.backgroundColor = '#CEE6FF';
    document.getElementById('usfm-left').style.backgroundColor = '#CEE6FF';
    document.getElementById('usfm-right').style.backgroundColor = '#CEE6FF';
    document.getElementById('pdf-parent').style.backgroundColor = '#FFFFFF';
    document.getElementById('pdf-left').style.backgroundColor = '#FFFFFF';
    document.getElementById('pdf-right').style.backgroundColor = '#FFFFFF';
    document.getElementById('doc-parent').style.backgroundColor = '#FFFFFF';
    document.getElementById('doc-left').style.backgroundColor = '#FFFFFF';
    document.getElementById('doc-right').style.backgroundColor = '#FFFFFF';
    document.getElementById('usfm-sub-text').style.display = 'block';
    document.getElementById('pdf-sub-text').style.display = 'none';
    document.getElementById('doc-sub-text').style.display = 'none';
    document.getElementById('usfm-parent').style.height = '130px';
    document.getElementById('doc-parent').style.height = '50px';
    document.getElementById('pdf-parent').style.height = '50px';
    document.getElementById('image-pdf').innerHTML = '<img src="/assets/img/pdf.png" width="20" height="24"/>';
    document.getElementById('image-doc').innerHTML = '<img src="/assets/img/file-word.png" />';
    document.getElementById('image-usfm').innerHTML = '<img src="/assets/img/usfm_selected.png" width="20" height="15"/>';
    document.getElementById('pdf_checked').innerHTML = '<img src="assets/img/radio_unchecked.png" width="20" height="20"/>';
    document.getElementById('doc_checked').innerHTML = '<img src="assets/img/radio_unchecked.png" width="20" height="20"/>';
    document.getElementById('usfm_checked').innerHTML = '<img src="assets/img/radio_checked.png" width="20" height="20"/>';
    document.getElementById('label-usfm-text').style.color = '#015AD9';
    document.getElementById('label-usfm-text').style.fontWeight = '700';
    document.getElementById('label-pdf-text').style.color = '#565656';
    document.getElementById('label-pdf-text').style.fontWeight = '400';
    document.getElementById('label-doc-text').style.color = '#565656';
    document.getElementById('label-doc-text').style.fontWeight = '400';
    this.fileType.setValue('usfm');
  }
}
