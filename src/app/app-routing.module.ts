import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './core/guards/auth.guard';

import {HomeComponent} from './home/home.component';
import {HomeRoutes} from './home/home.routes';
import {InventoryComponent} from './inventory/inventory.component';
import {InventoryRoutes} from './inventory/inventory.routes';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: HomeRoutes
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    children: InventoryRoutes,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
