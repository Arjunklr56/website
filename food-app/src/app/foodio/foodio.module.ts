import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodioRoutingModule } from './foodio-routing.module';
import { HeaderComponent } from './header/header.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { GetAllFoodCategoryComponent } from './get-all-food-category/get-all-food-category.component';
import { RestaurantFoodsComponent } from './restaurant-foods/restaurant-foods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuByRestaurantIdComponent } from './menu-by-restaurant-id/menu-by-restaurant-id.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FoodListComponent,
    FoodDetailComponent,
    CartComponent,
    GetAllFoodCategoryComponent,
    RestaurantFoodsComponent,
    MenuByRestaurantIdComponent,
  ],
  imports: [
    CommonModule,
    FoodioRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FoodioModule {}
