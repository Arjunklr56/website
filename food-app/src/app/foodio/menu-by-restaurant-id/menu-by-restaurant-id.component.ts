/**
 * @author Arjun 
 * 
 * @description This Angular component, `MenuByRestaurantIdComponent`, is responsible for displaying the menu
 *  of a specific restaurant based on the restaurant ID obtained from the route parameters.
 * It uses `FoodService` to fetch the menu data and `ToastrService` to show notifications.
 * The component allows users to add food items to their cart and stores the cart items in local storage.
 */


import { Component, LOCALE_ID } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';
import { MenuByRestaurant } from '../foods.type';
import { ToastrService } from 'ngx-toastr';

// Define the component with its selector, template, and style files
@Component({
  selector: 'app-menu-by-restaurant-id',
  templateUrl: './menu-by-restaurant-id.component.html',
  styleUrls: ['./menu-by-restaurant-id.component.css'],
})
export class MenuByRestaurantIdComponent {
  RestaurantId: any; // Variable to store the restaurant ID
  MenuByRestaurantData: any; // Variable to store the menu data
  categoryNames: any; // Variable to store category names
  isLoading: boolean = false; // Variable to indicate loading state

  // Constructor to inject services
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  // Lifecycle hook that runs after the component has been initialized
  ngOnInit() {
    // Subscribe to route parameters to get the restaurant ID
    this.route.paramMap.subscribe((res) => {
      this.RestaurantId = res.get('id');
      console.log(this.RestaurantId); // Log the restaurant ID for debugging
    });

    // Fetch the menu data for the restaurant
    this.MenuByRestaurants();
  }

  // Method to fetch the menu data for the restaurant
  MenuByRestaurants() {
    this.foodService
      .GetAllMenuByRestaurantId(this.RestaurantId)
      .subscribe((res) => {
        if (res.result) {
          console.log(res.data); // Log the menu data for debugging

          this.MenuByRestaurantData = res.data;
          console.log(this.MenuByRestaurantData); // Log the menu data again for debugging
        } else {
          console.log(res.message); // Log an error message if the request failed
        }
      });
  }

  // Method to add a food item to the cart
  onAddCart(foodDetails: MenuByRestaurant) {
    this.foodService.cartItems.push(foodDetails); // Add the item to the cart array
    this.toastr.success('view to cart', 'Item added'); // Show a success toast message

    // Store the cart items in local storage
    localStorage.setItem('cart', JSON.stringify(this.foodService.cartItems));
  }
}

// Author: Arjun
