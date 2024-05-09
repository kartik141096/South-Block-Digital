import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';


export const adminRoutes: Routes = [
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'',
                component:DashboardComponent,
                canActivate: [AuthGuard]
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate: [AuthGuard] 
            }
        ]
    }
];
