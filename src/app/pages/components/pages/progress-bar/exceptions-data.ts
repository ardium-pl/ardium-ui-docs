import { SupportedLanguage } from 'src/app/components/code/code.types';
import { ExceptionsPageData } from 'src/app/components/exceptions-page/exceptions-page.types';

export const ProgressBarExceptionsData: ExceptionsPageData = {
  name: 'Progress Bar',
  exceptions: [
    {
      name: 'ArdiumProgressBarComponent',
      exceptions: [
        {
          code: 'ARD-NF4010',
          exceptionText:
            "Forbidden param combination in <ard-progress-bar>: cannot use 'mode=\"buffer\"' and 'size=\"auto\"' at the same time.",
          description: [
            'This exception is raised when a progress bar is configured with buffer mode while also using the auto size mode.',
            'The component supports both features independently, but not together, because the animated buffer state requires a fixed track height.',
          ],
          exampleResults: [
            {
              code: `<ard-progress-bar mode="buffer" size="auto"></ard-progress-bar>`,
              codeLanguage: SupportedLanguage.HTML,
              result:
                'ARD-NF4010: Forbidden param combination in <ard-progress-bar>: cannot use \'mode="buffer"\' and \'size="auto"\' at the same time.',
            },
          ],
        },
      ],
    },
  ],
};
