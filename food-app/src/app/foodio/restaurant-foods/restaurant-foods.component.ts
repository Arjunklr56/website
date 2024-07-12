/**
 * @author Arjun
 *
 * @description:
 * This component displays food items based on the selected category in a restaurant.
 * It fetches food items from the backend API using the FoodService and allows navigation to
 * food details and add-to-cart pages.
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurant-foods',
  templateUrl: './restaurant-foods.component.html',
  styleUrls: ['./restaurant-foods.component.css'],
})
export class RestaurantFoodsComponent {
  categoryId: any; // To store the current category ID from the route
  FoodCategory: any; // To store the food items of the selected category
  foodOrderForm!: FormGroup; // Form group for food order
  loggeduserdata: any; // To store logged in user data
  isLoading: boolean = false; // To manage loading state

  // Injecting necessary services
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  // Lifecycle hook to initialize the component
  ngOnInit() {
    // Subscribe to route parameters to get the category ID
    this.route.paramMap.subscribe((id: any) => {
      this.categoryId = id.get('categoryId');
      console.log(this.categoryId);
    });
    this.FoodItemByCategory(); // Fetch food items for the selected category
  }

  // Method to fetch food items by category
  FoodItemByCategory() {
    this.isLoading = true; // Set loading state to true
    this.foodService
      .GetFoodItemByCategory(this.categoryId)
      .subscribe((res: any) => {
        if (res.result) {
          console.log(res);
          this.FoodCategory = res.data; // Store the fetched food items
          console.log(res.data);
          this.isLoading = false; // Set loading state to false
        } else {
          console.log(res.message);
        }
      });
  }

  // Method to navigate to food details page
  foodDetails(id: number) {
    this.router.navigate(['/details', id, this.categoryId]);
  }

  // Method to navigate to add-to-cart page
  navigateToAddToCart(id: any) {
    this.router.navigate(['/addTocard', id]);
  }
}
