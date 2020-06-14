import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UnreviewedTalkComponent } from './unreviewed-talk.component';
import { CreateNewSessionComponent } from './create-new-session.component';

@NgModule({
  declarations: [
    HomeComponent,
    UnreviewedTalkComponent,
    CreateNewSessionComponent,
  ],
  imports: [CommonModule],
  entryComponents: [
    HomeComponent,
    UnreviewedTalkComponent,
    CreateNewSessionComponent,
  ],
})
export class HomeModule {}
