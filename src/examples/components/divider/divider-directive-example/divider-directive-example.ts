import { Component } from '@angular/core';
import { ArdiumDividerModule } from '@ardium-pl/ui';

@Component({
  selector: 'divider-directive-example',
  standalone: true,
  imports: [ArdiumDividerModule],
  templateUrl: './divider-directive-example.html',
  styleUrl: './divider-directive-example.scss',
})
export class DividerDirectiveExample {}
