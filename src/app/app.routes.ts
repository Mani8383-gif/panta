import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Certificate } from './pages/certificate/certificate';
import { OrganizationalChart } from './pages/organizational-chart/organizational-chart';
import { Post } from './khadamat/post/post';
import { Execute } from './khadamat/execute/execute';
import { Solar } from './khadamat/solar/solar';
import { Power } from './khadamat/power/power';
import { Design } from './khadamat/design/design';

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
    },
    {
        path:'post',
        component:Post
    },
    {
        path:'execute',
        component:Execute
    },
    {
        path:'solar',
        component:Solar
    },{
        path:'power',
        component:Power
    },
    {
        path:'design',
        component:Design
    }
];
