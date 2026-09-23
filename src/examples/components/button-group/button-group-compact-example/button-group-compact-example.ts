import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule } from '@ardium-pl/ui';

@Component({
  selector: 'button-group-compact-example',
  templateUrl: './button-group-compact-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule],
})
export class ButtonGroupCompactExample {}
