import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdminLoginComponent],
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
