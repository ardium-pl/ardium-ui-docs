import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumProgressBarModule } from '@ardium-pl/ui';
import { ProgressBarBasicExampleData, ProgressBarBufferExampleData, ProgressBarModesExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'progress-bar-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumProgressBarModule,
    RouterModule,
  ],
  templateUrl: './progress-bar.page.html',
})
export class ProgressBarPage {
  readonly ProgressBarBasicExampleData = ProgressBarBasicExampleData;
  readonly ProgressBarModesExampleData = ProgressBarModesExampleData;
  readonly ProgressBarBufferExampleData = ProgressBarBufferExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideProgressBarDefaults({
      color: 'success',
      variant: 'pill',
      size: 'default',
      mode: 'determinate',
    }),
  ],
};`;
}
