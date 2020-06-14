import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkDurationPipe } from './talk-duration.pipe';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZoomInDirective } from './zoom-in.directive';

@NgModule({
  declarations: [TalkDurationPipe, DetailPanelComponent, ZoomInDirective],
  imports: [CommonModule],
  exports: [TalkDurationPipe, DetailPanelComponent, ReactiveFormsModule],
  entryComponents: [TalkDurationPipe, DetailPanelComponent, ZoomInDirective],
})
export class SharedModule {}
