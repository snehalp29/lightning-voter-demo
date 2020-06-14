import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {
  ResultsModule,
  ResultsComponent,
  SessionDetailWithVotesComponent,
  SessionDetailComponent,
} from './results';
import { SharedModule, DetailPanelComponent } from './shared';
import { AdminModule } from './admin/admin.module';
import { AdminLoginComponent } from './admin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AdminModule,
    SharedModule,
    ResultsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(public injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [AdminLoginComponent, 'admin-login-el'],
      [ResultsComponent, 'results-el'],
      [SessionDetailWithVotesComponent, 'session-detail-with-votes-el'],
      [SessionDetailComponent, 'session-detail-el'],
      [DetailPanelComponent, 'detail-panel-el'],
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, {
        injector: this.injector,
      });

      customElements.define(name, el);
    }
  }
}
