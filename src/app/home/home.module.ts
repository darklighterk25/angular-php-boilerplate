import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
// Pages
import {LandingComponent} from './pages/landing/landing.component';
import {LoginComponent} from './pages/login/login.component';
import {NavigationComponent} from './components/navigation/navigation.component';
// Routes
import {HomeRoutes} from './home.routes';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(HomeRoutes)
  ],
  exports: [
    HomeComponent,
    LandingComponent,
    LoginComponent,
    NavigationComponent
  ]
})
export class HomeModule {
}
