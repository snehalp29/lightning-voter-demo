import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [CommonModule, SharedModule],
  entryComponents: [AdminLoginComponent],
})
export class AdminModule {}
