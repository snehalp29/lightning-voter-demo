import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkDurationPipe } from './talk-duration.pipe';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TalkDurationPipe, DetailPanelComponent],
  imports: [CommonModule],
  exports: [TalkDurationPipe, DetailPanelComponent, ReactiveFormsModule],
  entryComponents: [TalkDurationPipe, DetailPanelComponent],
})
export class SharedModule {}
