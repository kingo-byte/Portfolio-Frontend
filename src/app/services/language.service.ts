import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './models/Language';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private apiUrl = `${Environment.apiUrl}/Languages`;

  constructor(private http: HttpClient) {}

  // Fetch all languages
  getAllLanguages(): Observable<Language[]> {
    const url = `${this.apiUrl}/GetLanguages`;
    return this.http.get<Language[]>(url);
  }
}
