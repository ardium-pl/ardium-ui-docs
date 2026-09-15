import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumSpinnerModule } from '@ardium-ui/ui';
import { SpinnerBasicExampleData, SpinnerSizingExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'spinner-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumSpinnerModule,
    RouterModule,
  ],
  templateUrl: './spinner.page.html',
  styleUrl: './spinner.page.scss',
})
export class SpinnerPage {
  readonly SpinnerBasicExampleData = SpinnerBasicExampleData;
  readonly SpinnerSizingExampleData = SpinnerSizingExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideSpinnerDefaults({ color: 'danger' }), // all spinners will now be red by default
  ],
};`;
}
