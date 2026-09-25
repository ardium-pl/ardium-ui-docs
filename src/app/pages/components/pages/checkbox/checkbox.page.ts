import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArdiumCheckboxModule } from '@ardium-pl/ui';
import { CheckboxBasicExampleData, CheckboxStateExampleData, CheckboxTemplateExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'checkbox-page',
  standalone: true,
  imports: [
    CodeExampleComponent,
    CodeComponent,
    ArticleSectionsModule,
    HeadingsModule,
    ArdiumCheckboxModule,
    RouterModule,
  ],
  templateUrl: './checkbox.page.html',
  styleUrl: './checkbox.page.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxPage {
  readonly CheckboxBasicExampleData = CheckboxBasicExampleData;
  readonly CheckboxStateExampleData = CheckboxStateExampleData;
  readonly CheckboxTemplateExampleData = CheckboxTemplateExampleData;

  readonly providingDefaultValuesExampleCode = `export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideCheckboxDefaults({ color: 'success', reverseSelected: false }),
  ],
};`;
}
