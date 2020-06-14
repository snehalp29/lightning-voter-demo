import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AdminModel } from './admin-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgAuthService } from '../../security/ng-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit, OnChanges {
  model: AdminModel = new AdminModel();
  loginForm: FormGroup = new FormGroup({});
  @Output() userauth: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title: string = '';

  constructor(
    private fb: FormBuilder,
    private ngAuthService: NgAuthService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    this.ngAuthService.login(this.loginForm.value).subscribe(
      () => {
        console.log('user authenticated successfully');
        this.userauth.next(true);
      },
      (err: any) => {
        console.log(`user authentication error ${err}`);
        this.userauth.next(false);
      }
    );
  }
}
