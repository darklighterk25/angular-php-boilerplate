import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {AuthService} from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public disableBtn: boolean;
  public form: FormGroup;
  public formSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
    this.disableBtn = true;
    this.formSubscription = this.form.valueChanges.subscribe(
      () => {
        this.disableBtn = !this.form.valid;
      }
    );
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  login(): void {
    this.disableBtn = true;
    this.authService.login(this.form.value).pipe().subscribe(
      () => {
      },
      error => console.error(error)
    );
  }
}
