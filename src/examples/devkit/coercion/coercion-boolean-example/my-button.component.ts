import { Component, input } from "@angular/core";
import { coerceBooleanProperty } from "@ardium-pl/devkit";

@Component({
  selector: 'my-button',
  template: '<button [disabled]="disabled()"><ng-content /></button>',
  standalone: true,
  imports: [],
})
export class MyButtonComponent {
  readonly disabled = input<boolean, any>(false, { transform: coerceBooleanProperty });
}