import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { AuthService } from '../../../auth.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
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

// userData = [];





  constructor(private route: ActivatedRoute, private dataService: DataService, private authService: AuthService, private router: Router) {
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

}
