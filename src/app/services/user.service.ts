import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${Environment.apiUrl}/Users`;

  constructor(private http: HttpClient) {}

  // Fetch a user by ID
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/GetUser/${id}`;
    return this.http.get<User>(url);
  }
}
