import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


export interface Category {
  category_name: string;
  is_active: string;
  slaves: Subcategory[];
}

export interface Subcategory {
  subcategory_name: string[];
  is_active: string[];
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(protected ApiService: ApiService) {}
  
  weather: { temp: number, location:string, date:string, icon:string } = { temp: 0, location:'', date:'', icon:'' };
  category_data:Category[][] = [];

  ngOnInit(): void {

    this.ApiService.get_weather_data().subscribe(data => {
      this.weather.temp = data.current.feelslike_c;
      this.weather.location = data.location.name;
      this.weather.date = data.location.date;
      this.weather.icon = data.current.condition.icon;
    
    }, error => {
      console.error(error);
    });

    this.ApiService.get_category().subscribe(data => {
      console.log(data)
      this.category_data = data;
    }, error => {
      console.error(error);
    });


  }
}
