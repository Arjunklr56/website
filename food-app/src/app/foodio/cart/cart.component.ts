/**
 * @author  Arjun
 *
 * @description:
 * This component manages the shopping cart functionality, including displaying cart items,
 * incrementing/decrementing item quantities, and placing orders. It interacts with the
 * FoodService to add new orders and uses ToastrService for displaying notifications.
 */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  id: any; // ID placeholder
  customerid: any; // Customer ID placeholder
  cartDetails: any; // Array to hold cart details

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCartItems(); // Fetch cart items on component initialization
  }

  quantity: number = 0; // Quantity placeholder

  // Method to increment quantity
  increment(): void {
    this.quantity += 1;
  }

  // Method to decrement quantity (with minimum set to 0)
  decrement(): void {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

  // Method to fetch cart items from localStorage
  getCartItems() {
    const cartDetails = localStorage.getItem('cart'); // Retrieve cart items from localStorage
    this.cartDetails = cartDetails ? JSON.parse(cartDetails) : []; // Parse JSON data or initialize as empty array
    console.table(this.cartDetails); // Log cart items to console (for debugging)
  }

  // Method to place an order
  placeOrder(restaurantID: number) {
    const userId: any = localStorage.getItem('foodiyoUser'); // Retrieve user ID from localStorage
    this.customerid = JSON.parse(userId); // Parse user ID as JSON object

    // Prepare order object
    const obj = {
      userId: this.customerid.userId,
      totalAmount: 0, // Placeholder for total amount (to be calculated)
      restaurantId: restaurantID,
      deliveryAddress: 'string', // Placeholder for delivery address (to be implemented)
    };

    // Call FoodService to add a new order
    this.foodService.AddNewOrder(obj).subscribe((res) => {
      console.log(res.data); // Log order response data
      if (res.result) {
        console.log(res.data); // Log successful order data
        this.toastr.success('Order placed'); // Show success message using ToastrService
      } else {
        alert(res.message); // Show error message if order fails
      }
    });
  }
}
