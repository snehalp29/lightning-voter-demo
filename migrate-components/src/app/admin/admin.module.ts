import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from '../shared';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    CreateUsersComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
  imports: [CommonModule, SharedModule],
  entryComponents: [
    AdminLoginComponent,
    CreateUsersComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
})
export class AdminModule {}
