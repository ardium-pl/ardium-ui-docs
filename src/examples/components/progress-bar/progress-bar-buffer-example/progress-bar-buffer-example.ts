import { Component } from '@angular/core';
import { ArdiumProgressBarModule } from '@ardium-pl/ui';

@Component({
  selector: 'progress-bar-buffer-example',
  templateUrl: './progress-bar-buffer-example.html',
  standalone: true,
  imports: [ArdiumProgressBarModule],
})
export class ProgressBarBufferExample {
  readonly value = 45;
  readonly bufferValue = 72;
}
