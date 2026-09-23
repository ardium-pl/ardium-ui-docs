import { Component, signal } from '@angular/core';
import { ArdiumDialogModule, ArdiumModalModule } from '@ardium-pl/ui';

@Component({
  selector: 'dialog-basic-example',
  templateUrl: './dialog-basic-example.html',
  styleUrl: './dialog-basic-example.scss',
  standalone: true,
  imports: [ArdiumModalModule, ArdiumDialogModule],
})
export class DialogBasicExample {
  readonly modalOpen = signal<boolean>(false);

  readonly dialogOpen = signal<boolean>(false);
}
