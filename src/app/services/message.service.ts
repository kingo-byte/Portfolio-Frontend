import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'https://localhost:7206/api/Messages';

  constructor(private http: HttpClient) {}

  // Post a Message
  addMessage(message: Message): Observable<HttpResponse<Message>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<HttpResponse<Message>>(
      this.apiUrl,
      message,
      httpOptions
    );
  }
}
