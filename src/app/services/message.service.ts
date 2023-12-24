import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './models/message';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = `${Environment.apiUrl}/Messages`;

  constructor(private http: HttpClient) {}

  // Post a Message
  addMessage(message: Message):Observable<Message>
  {
    return this.http.post(`${this.apiUrl}/AddMessage`, message);
  }
}
