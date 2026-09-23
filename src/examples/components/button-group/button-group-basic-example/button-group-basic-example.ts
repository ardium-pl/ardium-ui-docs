import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-pl/ui';

@Component({
  selector: 'button-group-basic-example',
  templateUrl: './button-group-basic-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupBasicExample {
  
}
