import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from './models/Experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiUrl = 'https://localhost:7206/api';

  constructor(private http: HttpClient) {}

  // Fetch a Experience by ID
  getExperienceById(id: number): Observable<Experience> {
    const url = `${this.apiUrl}/Experiences/${id}`;
    return this.http.get<Experience>(url);
  }

  // Fetch all experiences
  getAllExperiences(): Observable<Experience[]> {
    const url = `${this.apiUrl}/Experiences`;
    return this.http.get<Experience[]>(url);
  }
}
