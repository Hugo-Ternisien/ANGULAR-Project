import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResultPageComponent } from './display-result-page.component';

describe('DisplayResultPageComponent', () => {
  let component: DisplayResultPageComponent;
  let fixture: ComponentFixture<DisplayResultPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayResultPageComponent]
    });
    fixture = TestBed.createComponent(DisplayResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
