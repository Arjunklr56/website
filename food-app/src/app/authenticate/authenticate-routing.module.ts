import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FoodListComponent } from '../foodio/food-list/food-list.component';

const routes: Routes = [{path:"",component:LandingComponent},
{
  path:"signup",component:SignUpComponent
},{
  path:"login",component:LoginComponent
},{
  path:"Foodlist",component:FoodListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
