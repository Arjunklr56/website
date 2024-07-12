/**
 * @author Arjun
 *
 * @description:
 * This component handles the display of food details for a specific restaurant and category.
 * It fetches food items from the backend using FoodService, allows adding items to a cart,
 * and utilizes ToastrService for displaying notifications.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RestaurantByCategory } from '../foods.type';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})
export class FoodDetailComponent implements OnInit {
  orderForm!: FormGroup; // Form group for order details
  GetFoodItemDetails: any; // To store details of fetched food items
  RestaurantId: any; // ID of the selected restaurant
  categoryId: any; // ID of the selected category
  loggeduserdata: any; // To store logged in user data
  isLoading: boolean = false; // To manage loading state
  SpinerLoading: boolean = false; // To manage spinner loading state

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch IDs from route parameters
    this.RestaurantId = this.route.snapshot.params['id'];
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.GetFoodItemByCategory(); // Fetch food items by restaurant and category
  }

  // Method to fetch food items by restaurant and category
  GetFoodItemByCategory() {
    this.isLoading = true; // Set loading state to true
    this.foodService
      .GetFoodItemOfRestaurantByCategory(this.RestaurantId, this.categoryId)
      .subscribe((res) => {
        if (res.result) {
          console.log(res.data);
          this.GetFoodItemDetails = res.data; // Store fetched food items
          this.isLoading = false; // Set loading state to false
        } else {
          console.log(res.message);
        }
      });
  }

  // Method to add selected food item to cart
  AddToCart(details: RestaurantByCategory) {
    this.foodService.cartItems.push(details); // Add item to cart items array
    localStorage.setItem('cart', JSON.stringify(this.foodService.cartItems)); // Update cart in localStorage
    this.toastr.success('Item added to cart', 'Success'); // Show success message using Toastr
  }
}
