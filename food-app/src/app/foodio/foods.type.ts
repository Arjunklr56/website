/**
 * Represents a generic API response structure.
 * @template T - Type of the data property.
 */
export type TApiResponse<T> = {
  message: string;      // Message from the API
  result: boolean;      // Success or failure of the API call
  data: T;              // Data returned from the API
};

/**
 * Represents a category of food menu items.
 */
export type Category = {
  restaurantID: string;   // ID of the restaurant
  price: number;          // Price of the menu item
  menuItemName: string;   // Name of the menu item
  itemID: number;         // ID of the menu item
  description: string;    // Description of the menu item
  restaurantName: string; // Name of the restaurant
  availability: true;     // Availability status (assuming always available)
  photoUrl: string;       // URL of the menu item's photo
};

/**
 * Represents details of all restaurants.
 */
export type AllRestaurants = {
  result: any;            // Result status (usually boolean or similar)
  restaurantID: number;   // ID of the restaurant
  name: string;           // Name of the restaurant
  cuisineType: string;    // Type of cuisine served
  address: string;        // Address of the restaurant
  contactNo: number;      // Contact number of the restaurant
  openingHours: string;   // Opening hours of the restaurant
};

/**
 * Represents the structure used to add an item to the shopping cart.
 */
export type AddToCart = {
  customerId: number;     // ID of the customer
  itemId: number;         // ID of the item to be added to cart
  quantity: number;       // Quantity of the item
};

/**
 * Represents the structure used to place a new order.
 */
export type AddNewOrder = {
  userId: number;         // ID of the user placing the order
  totalAmount: number;    // Total amount of the order
  restaurantId: number;   // ID of the restaurant for the order
  deliveryAddress: string;// Delivery address for the order
};

/**
 * Represents a food menu item categorized by a restaurant.
 */
export type RestaurantByCategory = {
  restaurantID: number;   // ID of the restaurant
  price: number;          // Price of the menu item
  menuItemName: string;   // Name of the menu item
  itemID: number;         // ID of the menu item
  description: string;    // Description of the menu item
  availability: true;     // Availability status (assuming always available)
  photoUrl: string;       // URL of the menu item's photo
};

/**
 * Represents a food category.
 */
export type FoodCategory = {
  categoryId: number;     // ID of the food category
  categoryName: string;   // Name of the food category
  photoUrl: string;       // URL of the category's photo
};

/**
 * Represents the structure of all menu items.
 */
export type GetAllMenu = {
  restaurantID: number;   // ID of the restaurant
  price: number;          // Price of the menu item
  menuItemName: string;   // Name of the menu item
  itemID: number;         // ID of the menu item
  description: string;    // Description of the menu item
  restaurantName: string; // Name of the restaurant
  availability: true;     // Availability status (assuming always available)
  photoUrl: string;       // URL of the menu item's photo
  categoryName: string;   // Name of the category to which the item belongs
};

/**
 * Represents the structure of menu items categorized by a specific restaurant.
 */
export type MenuByRestaurant = {
  restaurantID: number;   // ID of the restaurant
  price: number;          // Price of the menu item
  menuItemName: string;   // Name of the menu item
  itemID: number;         // ID of the menu item
  description: string;    // Description of the menu item
  availability: true;     // Availability status (assuming always available)
  photoUrl: string;       // URL of the menu item's photo
  categoryName: string;   // Name of the category to which the item belongs
};
