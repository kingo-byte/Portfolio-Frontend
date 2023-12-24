import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './models/Skill';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private apiUrl = `${Environment.apiUrl}/Skills`;

  constructor(private http: HttpClient) {}

  // Fetch all skills
  getAllSkills(): Observable<Skill[]> {
    const headers = `${this.apiUrl}/GetSkills`;
    return this.http.get<Skill[]>(headers);
  }
}
