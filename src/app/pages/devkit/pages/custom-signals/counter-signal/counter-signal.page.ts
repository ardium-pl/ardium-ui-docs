import { Component } from '@angular/core';
import { CounterSignalBasicExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'counter-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './counter-signal.page.html',
  styleUrl: './counter-signal.page.scss',
})
export class CounterSignalPage {
  readonly CounterSignalBasicExampleData = CounterSignalBasicExampleData;
}
