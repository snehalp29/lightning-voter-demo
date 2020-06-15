import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionDetailWithVotesComponent } from './session-detail-with-votes/session-detail-with-votes.component';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ResultsComponent,
    SessionDetailComponent,
    SessionDetailWithVotesComponent,
  ],
  imports: [CommonModule, SharedModule],
  entryComponents: [
    ResultsComponent,
    SessionDetailComponent,
    SessionDetailWithVotesComponent,
  ],
})
export class SessionsModule {}
