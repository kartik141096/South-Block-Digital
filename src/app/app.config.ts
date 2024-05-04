import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { adminRoutes } from './admin/admin.routes';
import { websiteRoutes } from './website/website.routes'; 



export const appConfig: ApplicationConfig = {

  providers: [ provideRouter(websiteRoutes), provideRouter(adminRoutes), provideRouter(routes), provideClientHydration(), provideHttpClient()]
}; 
