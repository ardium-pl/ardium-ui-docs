import { Component } from '@angular/core';
import { ArdiumGridModule, ArdiumStackModule } from '@ardium-pl/ui';

@Component({
  selector: 'grid-stack-companion-example',
  standalone: true,
  imports: [ArdiumGridModule, ArdiumStackModule],
  templateUrl: './grid-stack-companion-example.html',
  styleUrl: './grid-stack-companion-example.scss',
})
export class GridStackCompanionExample {}