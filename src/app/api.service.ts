import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backend_api_url = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  get_weather_data()
  {
    return this.http.get<any>(this.backend_api_url+'get-weather');
  }
  
  get_category()
  {
    return this.http.get<any>(this.backend_api_url+'get-category');
  }
  
  get_news_list()
  {
    return this.http.get<any>(this.backend_api_url+'get-news-list');
  }





}
