import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
  getAllExperiences(): Observable<Experience[]> 
  {
    const url = `${this.apiUrl}/GetExperiences`;
    return this.http.get<Experience[]>(url);
  }

  addExperience(experience: Experience):Observable<Experience>
  {
    return this.http.post(`${this.apiUrl}/AddExperience`, experience);
  }
}
