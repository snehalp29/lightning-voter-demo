import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AdminLoginComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [],
  entryComponents: [AppComponent, AdminLoginComponent],
})
export class AppModule {
  constructor(public injector: Injector) {}

  ngDoBootstrap() {
    const AdminLoginElement = createCustomElement(AdminLoginComponent, {
      injector: this.injector,
    });

    customElements.define('admin-login-el', AdminLoginElement);
  }
}
