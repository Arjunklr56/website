/**
 * @author Arjun
 *
 * This service handles authentication-related HTTP requests using Angular's HttpClient module.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TApiResponse, User, loginUser } from './auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private http: HttpClient) {}

  /**
   * Sends a POST request to register a new user.
   * @param userData The user data to be registered.
   * @returns An Observable of type TApiResponse<User[]> containing the response.
   */
  signUPUser(userData: User): Observable<TApiResponse<User[]>> {
    return this.http.post<TApiResponse<User[]>>(
      '/api/zomato/AddNewUser',
      userData
    );
  }

  /**
   * Sends a POST request to authenticate a user login.
   * @param loginUser The login credentials (username and password).
   * @returns An Observable of type TApiResponse<loginUser[]> containing the response.
   */
  loginUser(loginUser: any): Observable<TApiResponse<loginUser[]>> {
    return this.http.post<TApiResponse<loginUser[]>>(
      '/api/zomato/Login',
      loginUser
    );
  }
}
