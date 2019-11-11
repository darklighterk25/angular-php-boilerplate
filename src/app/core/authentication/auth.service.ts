import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

import {AppSettings} from '../app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn$ = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn$.asObservable();
  }

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  login(body: { username, password }): Observable<any> {
    return this.httpClient.post(`${AppSettings.APIEndpoint}/login.php`, body, AppSettings.Options)
      .pipe(map((res: any) => {
        if (res.token) {
          this.loggedIn$.next(true);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inventory']);
        }
        return {status: 'ok'};
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
