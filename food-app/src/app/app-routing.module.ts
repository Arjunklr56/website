import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authenticate/sign-up/sign-up.component';
import { LoginComponent } from './authenticate/login/login.component';
import { FoodListComponent } from './foodio/food-list/food-list.component';
import { GetAllFoodCategoryComponent } from './foodio/get-all-food-category/get-all-food-category.component';
import { RestaurantFoodsComponent } from './foodio/restaurant-foods/restaurant-foods.component';

const routes: Routes = [{
  path:"landing-page",loadChildren:()=>import('./authenticate/authenticate.module').then((m)=>m.AuthenticateModule)
},{
  path:"",redirectTo:"landing-page",pathMatch:"full"
},{
  path:"signup",component:SignUpComponent
},
{
  path:"login",component:LoginComponent
},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
