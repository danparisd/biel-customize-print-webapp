import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-format-options',
  templateUrl: './format-options.component.html',
  styleUrls: ['./format-options.component.css']
})
export class FormatOptionsComponent implements OnInit {

  fileType = new FormControl('');
  height: number = 1;
  columns: number = 1;
  repoUrl: string;
  bookName: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      this.repoUrl = params['url'];
      this.bookName = params['book_name'];
      this.fileType = params['file_type'];
    });
  }

  onSubmit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fileType = params['file_type'];
      this.router.navigate(['filename'], { queryParams: {url: this.repoUrl, book_name: this.bookName, file_type: this.fileType, height: this.height, columns: this.columns } });
    })
  }

  incrementHeight() {
    if (this.height >= .5 && this.height < 2.0) {
      this.height = this.height + .5;
    }
  }

  decrementHeight() {
    if (this.height > .5) {
      this.height = this.height - .5;
    }
  }

  incrementColumns() {
    this.columns = this.columns + 1;
  }

  decrementColumns() {
    if (this.columns > 1) {
      this.columns = this.columns - 1;
    }
  }

}
