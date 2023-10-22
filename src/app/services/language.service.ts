import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './models/Language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private apiUrl = 'https://localhost:7206/api';

  constructor(private http: HttpClient) {}

  // Fetch all languages
  getAllLanguages(): Observable<Language[]> {
    const url = `${this.apiUrl}/Languages`;
    return this.http.get<Language[]>(url);
  }
}
