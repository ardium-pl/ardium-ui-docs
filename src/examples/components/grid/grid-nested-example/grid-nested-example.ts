import { Component } from '@angular/core';
import { ArdiumGridModule } from '@ardium-pl/ui';

@Component({
  selector: 'grid-nested-example',
  standalone: true,
  imports: [ArdiumGridModule],
  templateUrl: './grid-nested-example.html',
  styleUrl: './grid-nested-example.scss',
})
export class GridNestedExample {}