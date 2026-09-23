import { Component } from '@angular/core';
import { ArdiumGridModule } from '@ardium-pl/ui';

@Component({
  selector: 'grid-spacing-example',
  standalone: true,
  imports: [ArdiumGridModule],
  templateUrl: './grid-spacing-example.html',
  styleUrl: './grid-spacing-example.scss',
})
export class GridSpacingExample {}