import { Component } from '@angular/core';
import { ArdiumProgressBarModule } from '@ardium-pl/ui';

@Component({
  selector: 'progress-bar-basic-example',
  templateUrl: './progress-bar-basic-example.html',
  standalone: true,
  imports: [ArdiumProgressBarModule],
})
export class ProgressBarBasicExample {
  readonly progress = 66;
}
