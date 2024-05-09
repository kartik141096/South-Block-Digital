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
    console.log('1')
      if (state.url.includes('login')) {
        console.log('2')

        this.router.navigate(['admin/dashboard']);
        return false;
      }
      return true; // Allow access
    } else {
      console.log('3')

      // User is not logged in, redirect to login page
      this.router.navigate(['admin/login']);
      return false;
    }
  }
}
