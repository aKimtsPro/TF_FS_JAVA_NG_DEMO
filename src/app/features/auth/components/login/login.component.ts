import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LOGIN_FORM} from "../../form/login.form";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {AuthService} from "../../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private readonly _auth: AuthService,
    private readonly _router: Router,
    private readonly _message: MessageService
  ) {
    this.form = builder.group(LOGIN_FORM)
  }

  onSubmit() {
    this._auth.login( this.form.value ).subscribe({
      next: auth => {
        this._router.navigate(['home'])
        this._message.add({
          severity: 'success',
          summary: 'Auth success',
          detail: 'You are successfully logged in'
        })
      },
      error: err => {
        this._message.add({
          severity: 'error',
          summary: 'Auth failed',
          detail: err.error
        })
      }
    })
  }
}
