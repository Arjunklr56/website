/**
 * @author Arjun
 * 
 * @description:
 * LoginComponent handles the user login functionality in an Angular application.
 * It uses Angular's reactive forms approach and integrates with authentication service and Toastr for notifications.
 */

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { strongPasswordValidator } from '../help'; // Assuming strongPasswordValidator is a custom validator

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup; // Form group for login form
  errorMessage: null | undefined; // Variable to hold error messages

  constructor(
    private fb: FormBuilder,
    private authservice: AuthserviceService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Initialize the login form with form controls and validators
    this.loginForm = this.fb.group({
      userName: ['', Validators.required], // Username field with required validator
      password: [
        '', // Password field with required validator and custom strong password validator
        [
          Validators.required,
          Validators.minLength(8),
          strongPasswordValidator(),
        ],
      ],
    });
  }

  /**
   * loginFormSubmit handles the form submission for user login.
   * It sends a login request to the authentication service.
   * If login is successful, it stores user data in local storage and navigates to 'FoodCategory' page.
   * If login fails, it displays an error message using Toastr.
   */
  loginFormSubmit() {
    this.authservice.loginUser(this.loginForm.value).subscribe((response) => {
      if (response.result) {
        // If login successful, show success message, store user data in local storage, and navigate to 'FoodCategory' page
        console.log(response.data);
        this.toastr.success('Login Successfully !!..');
        localStorage.setItem('foodiyoUser', JSON.stringify(response.data));
        this.router.navigate(['/FoodCategory']);
      } else {
        // If login fails, show error message
        this.toastr.error(response.message);
        console.log(response.message);
      }
    });
  }
}
