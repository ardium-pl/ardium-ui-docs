import { Component } from '@angular/core';
import { FilePipesExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';

@Component({
  selector: 'file-pipes-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, HeadingsModule],
  templateUrl: './file-pipes.page.html',
  styleUrl: './file-pipes.page.scss',
})
export class FilePipesPage {
  readonly FilePipesExampleData = FilePipesExampleData;
}
