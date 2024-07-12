import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';
HttpClient;
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  constructor(private foodService: FoodService, private http: HttpClient) {}
  
}

