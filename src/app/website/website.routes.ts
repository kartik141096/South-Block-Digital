import { Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

export const websiteRoutes: Routes = [
    {
        path:'',
        component:WebsiteComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'news-details',
                component:NewsDetailsComponent
            },
        ]
    }
];
