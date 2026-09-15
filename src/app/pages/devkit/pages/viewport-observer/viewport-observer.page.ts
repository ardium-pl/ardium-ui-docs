import { Component } from '@angular/core';
import { ViewportObserverObserverRefExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'viewport-observer-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeExampleComponent, HeadingsModule],
  templateUrl: './viewport-observer.page.html',
  styleUrl: './viewport-observer.page.scss',
})
export class ViewportObserverPage {
  readonly ObserverRefExampleData = ViewportObserverObserverRefExampleData;
}
