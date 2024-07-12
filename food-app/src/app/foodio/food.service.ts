/**
 * @author Arjun
 *
 * @description:
 * This Angular service provides various methods to interact with a backend API for a food ordering application.
 * It includes methods to get food categories, food items by category, food items by restaurant and category,
 * all restaurants, a restaurant by ID, and all menu items. The service also allows adding a new order and uses
 * HttpClient for making HTTP requests.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Category,
  AllRestaurants,
  AddToCart,
  AddNewOrder,
  RestaurantByCategory,
  FoodCategory,
  GetAllMenu,
  MenuByRestaurant,
  TApiResponse,
} from './foods.type';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  id: any;

  // Array to hold cart items
  cartItems: any = [];
  
  // Lifecycle hook to initialize the component
  ngOnInit() {
    // Convert cart items to JSON string and store it in local storage with key 'cart'
    const setCart = JSON.stringify(this.cartItems);
    localStorage.setItem('cart', setCart);
  }

  // Injecting HttpClient to make HTTP requests
  constructor(private Http: HttpClient) {}

  // Method to get all food categories
  GetAllFoodCategory(): Observable<TApiResponse<FoodCategory[]>> {
    return this.Http.get<TApiResponse<FoodCategory[]>>(
      '/api/zomato/GetAllFoodCategory'
    );
  }

  // Method to get food items by category ID
  GetFoodItemByCategory(
    categoryId: number
  ): Observable<TApiResponse<Category[]>> {
    return this.Http.get<TApiResponse<Category[]>>(
      '/api/zomato/GetFoodItemByCategory?categoryId=' + categoryId
    );
  }

  // Method to get food items of a specific restaurant by category ID
  GetFoodItemOfRestaurantByCategory(
    restaurantId: number,
    categoryId: number
  ): Observable<TApiResponse<RestaurantByCategory[]>> {
    return this.Http.get<TApiResponse<RestaurantByCategory[]>>(
      '/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId=' +
        restaurantId +
        '&categoryId=' +
        categoryId
    );
  }

  // Method to add a new order
  AddNewOrder(order: AddNewOrder): Observable<TApiResponse<AddNewOrder[]>> {
    return this.Http.post<TApiResponse<AddNewOrder[]>>(
      '/api/zomato/AddNewOrder',
      order
    );
  }

  // Method to get all restaurants
  GetAllRestaurant(): Observable<TApiResponse<AllRestaurants[]>> {
    return this.Http.get<TApiResponse<AllRestaurants[]>>(
      '/api/zomato/GetAllRestaurant'
    );
  }

  // Method to get a specific restaurant by its ID
  GetRestaurantByRestaurantId(
    RestaurantId: number
  ): Observable<TApiResponse<MenuByRestaurant[]>> {
    return this.Http.get<TApiResponse<MenuByRestaurant[]>>(
      '/api/zomato/GetRestaurantByRestaurantId?restaurantID=' + RestaurantId
    );
  }

  // Method to get all menu items
  GetAllMenu(): Observable<TApiResponse<GetAllMenu[]>> {
    return this.Http.get<TApiResponse<GetAllMenu[]>>('/api/zomato/GetAllMenu');
  }

  // Method to get all menu items by restaurant ID
  GetAllMenuByRestaurantId(
    restaurantId: number
  ): Observable<TApiResponse<MenuByRestaurant[]>> {
    return this.Http.get<TApiResponse<MenuByRestaurant[]>>(
      '/api/zomato/GetAllMenuByRestaurantId?restaurantId=' + restaurantId
    );
  }
}
