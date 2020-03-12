import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatOptionsComponent } from './format-options.component';

describe('FormatOptionsComponent', () => {
  let component: FormatOptionsComponent;
  let fixture: ComponentFixture<FormatOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
