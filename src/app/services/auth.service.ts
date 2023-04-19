import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthToken } from '../modelo/auth.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  login(username:string, password: string): Observable<IAuthToken> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/JSON'
      })
    };
    const payload: string = JSON.stringify({ username, password });
    return this.http.post<IAuthToken>('https://fakestoreapi.com/auth/login', payload, httpOptions);
  }
}
