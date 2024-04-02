import { Routes } from '@angular/router';
import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { StaffnavComponent } from './staffnav/staffnav.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { DeptoppersComponent } from './deptoppers/deptoppers.component';
import { RegisterComponent } from './register/register.component';
import { TrackComponent } from './track/track.component';
import { DepmarkentryComponent } from './depmarkentry/depmarkentry.component';
import { DepattendanceComponent } from './depattendance/depattendance.component';

export const routes: Routes = [
    {
        path:'',component:MainnavComponent,
        children:[
            {path:'',component:HomeComponent},
            {path:'about',component:AboutComponent},
            {path:'gallery',component:GalleryComponent},
            {path:'contact',component:ContactComponent},
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent},
            {path:'track',component:TrackComponent} ,
            {path:'home/register',redirectTo:'register',pathMatch:'full'},
            {path:'home/track',redirectTo:'register',pathMatch:'full'}
        ]
    },
    {
        path:'staffnav',component:StaffnavComponent,
        children:[
            {path:'',component:StaffhomeComponent},
            {path:'staffhome',component:StaffhomeComponent},
            {path:'deptoppers',component:DeptoppersComponent},
            {path:'depmarkentry',component:DepmarkentryComponent},
            {path:'depattendence',component:DepattendanceComponent},
            {path:'staffhome/depmarkentry',redirectTo:'depmarkentry',pathMatch:'full'},
            {path:'staffhome/depattendence',redirectTo:'depattendence',pathMatch:'full'}
        ]
    }
];
