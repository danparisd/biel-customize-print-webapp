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
  repoUrl: string;
  bookName: string;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const err = params['err'];
      this.repoUrl = params['repo_url'];
      this.bookName = params['book_id'];
    });
  }

  onSubmit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const ft = params['fileType'];
      console.log('ft=' + ft);
      this.fileType = ft;
      this.router.navigate(['filename'], { queryParams: { repo_url: this.repoUrl, book_id: this.bookName, height: this.height, columns: this.columns, fileType: ft } });
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
