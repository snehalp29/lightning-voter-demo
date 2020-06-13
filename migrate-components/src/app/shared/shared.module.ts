import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkDurationPipe } from './talk-duration.pipe';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';

@NgModule({
  declarations: [TalkDurationPipe, DetailPanelComponent],
  imports: [CommonModule],
  exports: [TalkDurationPipe, DetailPanelComponent],
  entryComponents: [TalkDurationPipe, DetailPanelComponent],
})
export class SharedModule {}
