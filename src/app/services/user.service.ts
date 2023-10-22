import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7206/api';

  constructor(private http: HttpClient) {}

  // Fetch a user by ID
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/Users/${id}`;
    return this.http.get<User>(url);
  }

  // Fetch all users
  getAllUsers(): Observable<User[]> {
    const url = `${this.apiUrl}/Users`;
    return this.http.get<User[]>(url);
  }
}
