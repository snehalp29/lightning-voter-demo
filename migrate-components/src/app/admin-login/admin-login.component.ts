import { Component, OnInit } from '@angular/core';
import { AdminModel } from './admin-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgAuthService } from '../security/ng-auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  model: AdminModel = new AdminModel();
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private ngAuthService: NgAuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    this.ngAuthService.login(this.loginForm.value).subscribe(() => {
      () => {
        console.log('user authenticated');
      };
    });
  }
}
