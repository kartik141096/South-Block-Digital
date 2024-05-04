import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

export const adminRoutes: Routes = [
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'',
                component:LoginComponent
            }
        ]
    }
];
