// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service'; // Import your authentication service

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, // Inject your authentication service
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if (this.authService.isLoggedIn) {

      if (state.url.includes('login')) {

        this.router.navigate(['admin/dashboard']);
        return false;
      }

      return true;
    } 
    else {

      if (state.url.includes('login')) {
        
        return true;
      }else{

        this.router.navigate(['admin/login']);
        return false;
      }
      
    }
  }
}
