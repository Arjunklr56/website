import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFoodCategoryComponent } from './get-all-food-category.component';

describe('GetAllFoodCategoryComponent', () => {
  let component: GetAllFoodCategoryComponent;
  let fixture: ComponentFixture<GetAllFoodCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllFoodCategoryComponent]
    });
    fixture = TestBed.createComponent(GetAllFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
