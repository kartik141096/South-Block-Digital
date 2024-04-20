import { Component } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(protected ApiService: ApiService) {}
  
  weather: { temp: number, location:string, date:string, icon:string } = { temp: 0, location:'', date:'', icon:'' };

  ngOnInit(): void {
    this.ApiService.get_weather_data().subscribe(data => {
      this.weather.temp = data.current.feelslike_c;
      this.weather.location = data.location.name;
      this.weather.date = data.location.date;
      this.weather.icon = data.current.condition.icon;
      console.log(this.weather);
    }, error => {
      // console.error(error);
    });
  }
}
