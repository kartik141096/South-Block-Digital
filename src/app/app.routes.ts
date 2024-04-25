import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';


export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"news-details",
        component: NewsDetailsComponent
    }
];
