import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
import { ManageCategoryComponent } from './pages/manage-category/manage-category.component';
import { NewsComponent } from './pages/news/news.component';
import { AddNewsComponent } from './pages/add-news/add-news.component';

// import { NewsDetailsComponent } from '../website/pages/news-details/news-details.component';

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
                component:LoginComponent,
                canActivate: [AuthGuard]
            },
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate: [AuthGuard]
            },
            {
                path:'category',
                component:CategoryComponent,
                canActivate: [AuthGuard]
            },
            {
                path:'manage-category/:id',
                component:ManageCategoryComponent,
                canActivate: [AuthGuard]
            },
            {
                path:"news",
                component:NewsComponent,
                canActivate: [AuthGuard]
            },
            {
                path:"add-news",
                component:AddNewsComponent,
                canActivate: [AuthGuard]
            },
        ]
    }
];
