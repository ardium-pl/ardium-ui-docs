import { Component } from '@angular/core';
import {
    PersistentSignalCookiesExampleData,
    PersistentSignalExampleData,
    PersistentSignalLocalStorageExampleData,
    PersistentSignalSerializationExampleData,
} from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'persistent-signal-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './persistent-signal.page.html',
  styleUrl: './persistent-signal.page.scss',
})
export class PersistentSignalPage {
  readonly PersistentSignalExampleData = PersistentSignalExampleData;
  readonly PersistentSignalLocalStorageExampleData = PersistentSignalLocalStorageExampleData;
  readonly PersistentSignalCookiesExampleData = PersistentSignalCookiesExampleData;
  readonly PersistentSignalSerializationExampleData = PersistentSignalSerializationExampleData;
}
