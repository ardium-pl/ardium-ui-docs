import { Component } from '@angular/core';
import { ArdiumSpinnerModule } from '@ardium-pl/ui';

@Component({
  selector: 'spinner-basic-example',
  templateUrl: './spinner-basic-example.html',
  standalone: true,
  imports: [ArdiumSpinnerModule],
})
export class SpinnerBasicExample {}
