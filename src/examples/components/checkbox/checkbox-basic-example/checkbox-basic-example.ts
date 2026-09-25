import { Component, signal } from '@angular/core';
import { ArdiumCheckboxModule } from '@ardium-pl/ui';

@Component({
  selector: 'checkbox-basic-example',
  templateUrl: './checkbox-basic-example.html',
  styleUrl: './checkbox-basic-example.scss',
  standalone: true,
  imports: [ArdiumCheckboxModule],
})
export class CheckboxBasicExample {
  readonly accepted = signal(false);
}
