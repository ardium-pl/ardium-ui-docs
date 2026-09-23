import { Component } from '@angular/core';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-pl/ui';

@Component({
  selector: 'icon-button-basic-example',
  templateUrl: './icon-button-basic-example.html',
  styleUrl: './icon-button-basic-example.scss',
  standalone: true,
  imports: [ArdiumIconModule, ArdiumIconButtonModule],
})
export class IconButtonBasicExample {}
