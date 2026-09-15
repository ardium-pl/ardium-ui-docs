import { Component } from '@angular/core';
import { ArraySignalBasicExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'array-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './array-signal.page.html',
  styleUrl: './array-signal.page.scss',
})
export class ArraySignalPage {
  readonly ArraySignalBasicExampleData = ArraySignalBasicExampleData;
}
