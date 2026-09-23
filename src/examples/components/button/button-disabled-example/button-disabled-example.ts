import { Component } from '@angular/core';
import { ArdiumButtonModule } from '@ardium-pl/ui';

@Component({
  selector: 'button-disabled-example',
  templateUrl: './button-disabled-example.html',
  styleUrl: './button-disabled-example.scss',
  standalone: true,
  imports: [ArdiumButtonModule],
})
export class ButtonDisabledExample {
  onClick() {
    console.log('Button clicked!');
  }
}
