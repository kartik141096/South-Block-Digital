import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { DataService } from '../../../data.service';
import { AuthService } from '../../../auth.service';
import { ApiService } from '../../../api.service';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  userData = {
    "user": {
        "id": '',
        "name": "",
        "email": "@",
        "email_verified_at": '',
        "created_at": "",
        "updated_at": ""
    },
    "access_token": {
        "name": "",
        "token": "",
        "expires_at": '',
        "created_at": ""
    }
  }

  weather: { temp: number, name:string, country:string, date:string, icon:string } = { temp: 0, name:'',country:'', date:'', icon:'' };

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, protected ApiService: ApiService) {
    this.route.params.subscribe(params => {

      const userDataString = localStorage.getItem('user');
      if(userDataString){
        this.userData = JSON.parse(userDataString);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['admin/login'] );
  }

  ngOnInit(): void {

    this.ApiService.get_weather_data().subscribe(data => {
      this.weather.temp = data.current.feelslike_c;
      this.weather.name = data.location.name;
      this.weather.country = data.location.country;
      this.weather.date = data.location.date;
      this.weather.icon = data.current.condition.icon;
    
    }, error => {
      console.error(error);
    });

  }
}