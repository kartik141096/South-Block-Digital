import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backend_api_url = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // Weather APIs =========================================================================================================================================
  get_weather_data()
  {
    return this.http.get<any>(this.backend_api_url+'get-weather');
  }
  
  // Category APIs =========================================================================================================================================
  get_category()
  {
    return this.http.get<any>(this.backend_api_url+'get-category');
  }

  add_category(data:{})
  {
    return this.http.post<any>(this.backend_api_url+'add-category', data);
  }
  
  add_sub_category(data:{})
  {
    return this.http.post<any>(this.backend_api_url+'add-sub-category', data);
  }
  
  update_category(data:{})
  {
    return this.http.post<any>(this.backend_api_url+'update-category', data);
  }
  
  update_sub_category(data:{})
  {
    return this.http.post<any>(this.backend_api_url+'update-sub-category', data);
  }
  
  // News APIs ================================================================================================================================================
  get_news_list()
  {
    return this.http.get<any>(this.backend_api_url+'get-news-list');
  }
  



}
