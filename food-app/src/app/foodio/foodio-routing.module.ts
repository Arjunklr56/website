import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodListComponent } from './food-list/food-list.component';
import { GetAllFoodCategoryComponent } from './get-all-food-category/get-all-food-category.component';
import { RestaurantFoodsComponent } from './restaurant-foods/restaurant-foods.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { MenuByRestaurantIdComponent } from './menu-by-restaurant-id/menu-by-restaurant-id.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'FoodCategory',
        component: GetAllFoodCategoryComponent,
      },
      { path: '', redirectTo: 'FoodCategory', pathMatch: 'full' },
      {
        path: 'restaurantFood/:categoryId',
        component: RestaurantFoodsComponent,
      },
      {
        path: 'details/:id/:categoryId',
        component: FoodDetailComponent,
      },
      {
        path: 'addTocard',
        component: CartComponent,
      },
      {
        path: 'MenuByRestaurantId/:id',
        component: MenuByRestaurantIdComponent,
      },
    ],
  },
  {
    path: 'restaurantFood/:categoryId',
    component: RestaurantFoodsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodioRoutingModule {}
