import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = {
    email: '',
    password: ''
  };

  login() {
    this.authService.login(this.loginForm).subscribe(
      response => {

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(response));
    
        this.router.navigate(['admin/dashboard']);
      },
      error => {
        
        console.error('Login error', error);
      }
    );
  }
  
  


}
