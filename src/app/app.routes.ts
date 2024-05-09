import { Routes } from '@angular/router';

import { WebsiteComponent } from './website/website.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';




export const routes: Routes = [
    {
        path:'',
        component:WebsiteComponent
    },
    {
        path:'admin',
        component:AdminComponent,
        canActivate: [AuthGuard] 
    }
];
