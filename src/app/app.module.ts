import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// Guardias.
import {AuthService} from './core/authentication/auth.service';
import {AuthGuard} from './core/guards/auth.guard';
// Interceptores.
import {ErrorInterceptor} from './core/interceptors/error.interceptor';
import {TokenInterceptor} from './core/interceptors/token.interceptor';
// Módulos.
import {HomeModule} from './home/home.module';
import {InventoryModule} from './inventory/inventory.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    InventoryModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
