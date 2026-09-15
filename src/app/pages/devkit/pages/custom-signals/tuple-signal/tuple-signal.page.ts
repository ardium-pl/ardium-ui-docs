import { Component } from '@angular/core';
import { TupleSignalBasicExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'tuple-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './tuple-signal.page.html',
  styleUrl: './tuple-signal.page.scss',
})
export class TupleSignalPage {
  readonly TupleSignalBasicExampleData = TupleSignalBasicExampleData;
}
