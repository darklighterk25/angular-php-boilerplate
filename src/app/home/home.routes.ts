import {Routes} from '@angular/router';

import {LandingComponent} from './pages/landing/landing.component';
import {LoginComponent} from './pages/login/login.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
