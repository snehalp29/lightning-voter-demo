import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'talkDuration',
})
export class TalkDurationPipe implements PipeTransform {
  transform(duration: number): string {
    return 'Duration: ' + duration + ' minutes';
  }
}
