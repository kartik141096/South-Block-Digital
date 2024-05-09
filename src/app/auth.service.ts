// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backend_api_url = 'http://127.0.0.1:8000/api/';
  isLoggedIn = false;

  constructor(private http: HttpClient) {

    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(credentials: { email: string, password: string }): Observable<any> {

    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    return this.http.post<any>(this.backend_api_url + 'login', credentials);
  }

  logout(): void {

    this.http.post<any>(this.backend_api_url + 'logout', '');
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('user'); 
  }
}



