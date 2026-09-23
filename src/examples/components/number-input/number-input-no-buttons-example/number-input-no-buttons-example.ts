import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-pl/ui';

@Component({
  selector: 'number-input-no-buttons-example',
  templateUrl: './number-input-no-buttons-example.html',
  styleUrl: './number-input-no-buttons-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputNoButtonsExample {}
