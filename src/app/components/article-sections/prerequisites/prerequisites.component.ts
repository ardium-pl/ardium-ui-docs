import { Component, computed, input } from '@angular/core';
import { CodeExampleData } from '../../code-example/code-example.types';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrl: './prerequisites.component.scss',
  standalone: false,
})
export class PrerequisitesComponent {
  readonly moduleName = input.required<string>();
  readonly otherModuleNames = input<string[]>([]);

  readonly styles = input<(string | [string, boolean])[] | null>(null);

  readonly tsCode = computed(() => {
    const modulesToImport = !this.otherModuleNames().length
      ? this.moduleName()
      : [this.moduleName(), ...this.otherModuleNames()].join(', ');
    return `import { ${modulesToImport} } from '@ardium-pl/ui'`;
  });

  readonly isOtherModuleNamesDefined = computed(() => this.otherModuleNames().length > 0);

  readonly stylesCode = computed<CodeExampleData | null>(() => {
    const styles = this.styles();
    if (!styles) return null;
    const css = [
      `@import '../node_modules/@ardium-pl/ui/prebuilt-themes/default/core.css';`,
      ...styles.map(
        v =>
          `@import '../node_modules/@ardium-pl/ui/prebuilt-themes/default/${Array.isArray(v) ? v[0] : v}.css';${
            Array.isArray(v) && v[1] ? ' /* if needed */' : ''
          }`
      ),
    ].join('\n');
    const scss = [
      `@use '../node_modules/@ardium-pl/ui/themes/default/core.scss' as *;`,
      ...styles.map(
        v =>
          `@use '../node_modules/@ardium-pl/ui/themes/default/${Array.isArray(v) ? v[0] : v}.scss' as *;${
            Array.isArray(v) && v[1] ? ' // if needed' : ''
          }`
      ),
    ].join('\n');

    return {
      simpleScss: scss,
      scss: scss,
      css: css,
    };
  });
}
