import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuByRestaurantIdComponent } from './menu-by-restaurant-id.component';

describe('MenuByRestaurantIdComponent', () => {
  let component: MenuByRestaurantIdComponent;
  let fixture: ComponentFixture<MenuByRestaurantIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuByRestaurantIdComponent]
    });
    fixture = TestBed.createComponent(MenuByRestaurantIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
