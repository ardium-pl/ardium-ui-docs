import fs from 'fs';
import path from 'path';
import { Timer } from '../../common/timer';
import { displayError, displaySuccess } from '../../common/utils';

const timer = new Timer();

const dirname = import.meta.dirname;

const outputDir = path.join(dirname, '../../../dist/ardium-ui-docs/browser/');
const indexHtmlPath = path.join(outputDir, 'index.html');
const notFoundHtmlPath = path.join(outputDir, '404.html');

(() => {
  displaySuccess(`Found the index.html file. (${timer.toString()})`);
  timer.reset();

  if (!fs.existsSync(indexHtmlPath)) {
    displayError(`Cannot find index.html file. (${timer.toString()})`);
    return;
  }
  let content = fs.readFileSync(indexHtmlPath, { encoding: 'utf-8' });

  // allow to use the index.html file as 404.html file for github pages
  fs.writeFileSync(notFoundHtmlPath, content);
})();
