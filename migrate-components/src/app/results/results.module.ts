import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SharedModule } from '../shared/shared.module';
import { SessionDetailWithVotesComponent } from './session-detail-with-votes/session-detail-with-votes.component';
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [
    SessionDetailComponent,
    SessionDetailWithVotesComponent,
    ResultsComponent,
  ],
  imports: [CommonModule, SharedModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    SessionDetailComponent,
    SessionDetailWithVotesComponent,
    ResultsComponent,
  ],
})
export class ResultsModule {}
