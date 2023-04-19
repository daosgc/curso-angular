import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = this.fm.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private readonly fm: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {

  }

  onLogin() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((t) => {
      if (t.token) {
        this.router.navigate(['/products'])
      }
    });
  }
}
