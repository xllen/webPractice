/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top250Component } from './top250.component';

describe('Top250Component', () => {
  let component: Top250Component;
  let fixture: ComponentFixture<Top250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
