/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HotShowingComponent } from './hot-showing.component';

describe('HotShowingComponent', () => {
  let component: HotShowingComponent;
  let fixture: ComponentFixture<HotShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
