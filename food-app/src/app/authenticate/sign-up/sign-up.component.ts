/**
 * @author  Arjun
 *
 * @description :
 * SignUpComponent manages the user sign-up functionality in an Angular application.
 * It uses Angular's reactive forms approach with form validation and integrates with authentication service and Toastr for notifications.
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { mobileNumberValidator } from '../help'; // Assuming mobileNumberValidator is a custom validator
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm!: FormGroup; // Form group for sign-up form

  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Initialize the sign-up form with form controls and validators
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required], // Username field with required validator
      role: ['', Validators.required], // Role field with required validator
      password: [
        '', // Password field with required validator and minimum length validator
        [Validators.required, Validators.minLength(8)],
      ],
      mobileNo: [
        '', // Mobile number field with required validator and custom mobile number validator
        [Validators.required, mobileNumberValidator()],
      ],
      emailId: [
        '', // Email field with required validator and email validator
        [Validators.required, Validators.email],
      ],
    });
  }

  /**
   * signUpFormSubmit handles the form submission for user sign-up.
   * It sends a sign-up request to the authentication service.
   * If sign-up is successful, it shows a success message using Toastr and navigates to 'FoodCategory' page.
   * If sign-up fails, it shows an error message using Toastr.
   */
  signUpFormSubmit() {
    if (this.signUpForm.valid) {
      const formValue = this.signUpForm.value;
      this.authService.signUPUser(formValue).subscribe((response) => {
        console.log(response);
        if (response.result) {
          // If sign-up successful, show success message, navigate to 'FoodCategory' page, and reset form
          this.toastr.success('SignUp Successfully !!..');
          this.router.navigate(['/FoodCategory']);
          this.signUpForm.reset();
        } else {
          // If sign-up fails, show error message
          this.toastr.error(response.message);
        }
      });
    }
  }
}
