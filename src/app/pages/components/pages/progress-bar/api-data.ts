import { ApiPageData } from 'src/app/components/api-page';

export const ProgressBarApiData: ApiPageData = {
  name: 'Progress Bar',
  modules: [
    {
      name: 'ArdiumProgressBarModule',
      exports: 'ArdiumProgressBarComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumProgressBarComponent',
      selector: 'ard-progress-bar',
      exportedFrom: 'ArdiumProgressBarModule',
      description:
        'Linear status indicator for determinate, indeterminate, query, and buffer progress states.',
      inputs: [
        {
          name: 'value',
          type: 'NumberLike',
          description:
            'Current progress value for determinate and buffer modes, expressed as a percentage from 0 to 100.',
          default: '0',
          required: false,
        },
        {
          name: 'bufferValue',
          type: 'NumberLike',
          description:
            'Secondary progress value used only in buffer mode to display the additional buffered amount behind the active progress.',
          default: '0',
          required: false,
        },
        {
          name: 'color',
          type: 'SimpleComponentColor',
          description: 'The color of the active progress fill.',
          default: `'primary'`,
          required: false,
        },
        {
          name: 'variant',
          type: 'ProgressBarVariant',
          description: 'The shape variant of the progress bar. Use <code>sharp</code> or <code>pill</code>.',
          default: `ProgressBarVariant.Pill`,
          required: false,
        },
        {
          name: 'size',
          type: 'ProgressBarSize',
          description:
            'The size mode of the progress bar. Use <code>default</code> for a fixed height or <code>auto</code> to naturally fill the host container.',
          default: `ProgressBarSize.Default`,
          required: false,
        },
        {
          name: 'mode',
          type: 'ProgressBarMode',
          description:
            'Behavior mode of the component. Accepts <code>determinate</code>, <code>indeterminate</code>, <code>query</code>, and <code>buffer</code>.',
          default: `ProgressBarMode.Determinate`,
          required: false,
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_PROGRESS_BAR_DEFAULTS',
      type: 'ArdProgressBarDefaults',
      description: 'Used to provide the default values for all Progress Bar inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdProgressBarDefaults',
      description: 'Type used for providing default values for the Progress Bar.',
    },
  ],
  functions: [
    {
      name: 'provideProgressBarDefaults',
      description: 'Function used to provide default values for the Progress Bar, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdProgressBarDefaults>',
          description: 'Object containing the new default values for the Progress Bar.',
        },
      ],
    },
  ],
};
