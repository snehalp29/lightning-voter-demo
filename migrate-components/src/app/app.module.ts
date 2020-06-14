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
import {
  AdminLoginComponent,
  CreateUsersComponent,
  UserDetailsComponent,
  UserListComponent,
} from './admin';
import {
  HomeModule,
  HomeComponent,
  CreateNewSessionComponent,
  UnreviewedTalkComponent,
} from './home';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HomeModule,
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
      [CreateUsersComponent, 'create-users-el'],
      [UserDetailsComponent, 'user-details-el'],
      [UserListComponent, 'user-list-el'],
      [ResultsComponent, 'results-el'],
      /* Home  */
      [HomeComponent, 'home-el'],
      [CreateNewSessionComponent, 'create-new-session-el'],
      [UnreviewedTalkComponent, 'unreviewed-talk-el'],

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
