import { Routes } from '@angular/router';

import { WebsiteComponent } from './website/website.component';
import { AdminComponent } from './admin/admin.component';



export const routes: Routes = [
    {
        path:'',
        component:WebsiteComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }
];
