/**
 * @author Arjun
 * 
 * @description:
 * This component fetches and displays all food categories, restaurants, and their menus. 
 * It uses the FoodService to get data from the backend API and allows navigation to 
 * restaurant-specific food items and menus.
 */

import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-food-category',
  templateUrl: './get-all-food-category.component.html',
  styleUrls: ['./get-all-food-category.component.css'],
})
export class GetAllFoodCategoryComponent {
  foodCategoryArray: any[] = []; // Array to store all food categories
  AllRestaurants: any; // To store all restaurants
  RestaurantsDetails: any; // To store details of a specific restaurant
  FoodMenu: any[] = []; // Array to store all food menus
  isLoading: boolean = false; // To manage loading state

  // Injecting necessary services
  constructor(private foodService: FoodService, private router: Router) {}

  // Lifecycle hook to initialize the component
  ngOnInit() {
    this.FoodCategory(); // Fetch all food categories
    this.GetAllRestaurantChain(); // Fetch all restaurants
    this.AllFoodMenu(); // Fetch all food menus
  }

  // Method to fetch all food categories
  FoodCategory() {
    this.isLoading = true; // Set loading state to true
    this.foodService.GetAllFoodCategory().subscribe((res) => {
      this.foodCategoryArray = res.data; // Store the fetched food categories
      console.log(this.foodCategoryArray);
    });
  }

  // Method to navigate to restaurant foods page based on category ID
  navigaetToRestaurentFoods(categoryId: number) {
    this.router.navigate(['/restaurantFood', categoryId]);
  }

  // Method to fetch all restaurants
  GetAllRestaurantChain() {
    this.foodService.GetAllRestaurant().subscribe((response) => {
      if (response.result) {
        console.log(response.data);
        this.AllRestaurants = response.data; // Store the fetched restaurants
      } else {
        console.log(response.message);
      }
    });
  }

  // Method to fetch details of a specific restaurant by its ID
  RestaurantDetails(id: number) {
    this.isLoading = true; // Set loading state to true
    this.foodService.GetRestaurantByRestaurantId(id).subscribe((res) => {
      if (res.result) {
        this.RestaurantsDetails = res.data; // Store the fetched restaurant details
        console.log(this.RestaurantsDetails);
        this.isLoading = false; // Set loading state to false
      } else {
        console.log(res.message);
      }
    });
  }

  // Method to fetch all food menus
  AllFoodMenu() {
    this.foodService.GetAllMenu().subscribe((res) => {
      if (res.result) {
        console.log('GetAllMenu', res.data);
        this.FoodMenu = res.data; // Store the fetched food menus
        this.isLoading = false; // Set loading state to false
      } else {
        console.log(res.message);
      }
    });
  }

  // Method to navigate to menu by restaurant ID
  MenuByRestaurantId(id: number) {
    this.router.navigate(['/MenuByRestaurantId', id]);
  }
}
