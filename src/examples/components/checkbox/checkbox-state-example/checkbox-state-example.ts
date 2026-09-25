import { Component, signal } from '@angular/core';
import { ArdiumCheckboxModule, CheckboxState } from '@ardium-pl/ui';

@Component({
  selector: 'checkbox-state-example',
  templateUrl: './checkbox-state-example.html',
  styleUrl: './checkbox-state-example.scss',
  standalone: true,
  imports: [ArdiumCheckboxModule],
})
export class CheckboxStateExample {
  readonly state = signal<CheckboxState>(CheckboxState.Unselected);
  readonly reverse = signal(false);
}
