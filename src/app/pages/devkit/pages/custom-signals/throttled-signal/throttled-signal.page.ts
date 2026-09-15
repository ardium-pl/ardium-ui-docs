import { Component } from '@angular/core';
import { ThrottledSignalExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'throttled-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './throttled-signal.page.html',
  styleUrl: './throttled-signal.page.scss',
})
export class ThrottledSignalPage {
  readonly ThrottledSignalExampleData = ThrottledSignalExampleData;
}
