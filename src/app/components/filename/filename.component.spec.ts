import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenameComponent } from './filename.component';

describe('FilenameComponent', () => {
  let component: FilenameComponent;
  let fixture: ComponentFixture<FilenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
