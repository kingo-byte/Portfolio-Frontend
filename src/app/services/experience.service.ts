import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from './models/Experience';
import { Environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiUrl = `${Environment.apiUrl}/Experiences`;

  constructor(private http: HttpClient) {}

  // Fetch all experiences
  getAllExperiences(): Observable<Experience[]> {
    const url = `${this.apiUrl}/GetExperiences`;
    return this.http.get<Experience[]>(url);
  }
}
