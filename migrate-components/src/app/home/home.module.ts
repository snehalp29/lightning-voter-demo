import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UnreviewedTalkComponent } from './unreviewed-talk.component';
import { CreateNewSessionComponent } from './create-new-session.component';
import { SessionsModule } from '../sessions/sessions.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    HomeComponent,
    UnreviewedTalkComponent,
    CreateNewSessionComponent,
  ],
  imports: [CommonModule, SessionsModule, SharedModule],
  entryComponents: [
    HomeComponent,
    UnreviewedTalkComponent,
    CreateNewSessionComponent,
  ],
})
export class HomeModule {}
