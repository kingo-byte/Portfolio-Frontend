import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './models/Skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private apiUrl = 'https://localhost:7206/api';

  constructor(private http: HttpClient) {}

  // Fetch all skills
  getAllSkills(): Observable<Skill[]> {
    const url = `${this.apiUrl}/Skills`;
    return this.http.get<Skill[]>(url);
  }
}
