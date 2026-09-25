import { Component, signal } from '@angular/core';
import { ArdiumCheckboxModule } from '@ardium-pl/ui';

@Component({
  selector: 'checkbox-template-example',
  templateUrl: './checkbox-template-example.html',
  styleUrl: './checkbox-template-example.scss',
  standalone: true,
  imports: [ArdiumCheckboxModule],
})
export class CheckboxTemplateExample {
  readonly selected = signal(false);
}
