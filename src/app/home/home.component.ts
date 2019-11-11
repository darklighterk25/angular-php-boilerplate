import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>`
})
export class HomeComponent {
}
