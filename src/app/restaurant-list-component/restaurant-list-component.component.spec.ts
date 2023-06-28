import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListComponentComponent } from './restaurant-list-component.component';

describe('RestaurantListComponentComponent', () => {
  let component: RestaurantListComponentComponent;
  let fixture: ComponentFixture<RestaurantListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantListComponentComponent]
    });
    fixture = TestBed.createComponent(RestaurantListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
