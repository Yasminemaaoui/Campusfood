import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { InforamtionComponent } from '../inforamtion/inforamtion.component';

export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path:'home',component:HomePageComponent},
  {path:'information',component:InforamtionComponent},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' } 
];
