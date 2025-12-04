import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Certificate } from './pages/certificate/certificate';
import { OrganizationalChart } from './pages/organizational-chart/organizational-chart';

export const routes: Routes = [
    {
        path:'home',
        component:Home
    },
    {


        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'about us',
        component:AboutUs
    },
    {

        path:'contact us',
        component:ContactUs
    },
    {
        path:'certificate',
        component:Certificate
    },
    {
        path:'organizational-chart',
        component:OrganizationalChart
    }
];
