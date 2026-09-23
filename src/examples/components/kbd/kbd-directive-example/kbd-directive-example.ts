import { Component } from "@angular/core";
import { ArdiumKbdModule } from "@ardium-pl/ui";

@Component({
  selector: 'kbd-directive-example',
  templateUrl: 'kbd-directive-example.html',
  standalone: true,
  imports: [ArdiumKbdModule],
})
export class KbdDirectiveExample {}