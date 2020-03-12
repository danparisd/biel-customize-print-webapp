import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: '<a href="{{url}}">{{name}}</a>',  
  styles: [ 'border-bottom: 2px solid #DDDDDD;'	]
})
export class BreadcrumbComponent implements OnInit {

  @Input() name: string;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

} 
