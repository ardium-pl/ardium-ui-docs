import { Component } from '@angular/core';
import { FileSystemIsSupportedExampleData, FileSystemRequestUploadExampleData, FileSystemSaveAsExampleData } from '@examples';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeExampleComponent } from 'src/app/components/code-example/code-example.component';
import { HeadingsModule } from 'src/app/components/headings/headings.module';
import { SeeAlsoComponent } from "../../../../components/see-also/see-also.component";

@Component({
  selector: 'file-system-page',
  standalone: true,
  imports: [CodeExampleComponent, ArticleSectionsModule, SeeAlsoComponent, HeadingsModule],
  templateUrl: './file-system.page.html',
  styleUrl: './file-system.page.scss',
})
export class FileSystemPage {
  readonly FileSystemIsSupportedExampleData = FileSystemIsSupportedExampleData;
  readonly FileSystemSaveAsExampleData = FileSystemSaveAsExampleData;
  readonly FileSystemRequestUploadExampleData = FileSystemRequestUploadExampleData;
}
