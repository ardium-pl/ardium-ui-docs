import { StylingPageData } from 'src/app/components/styling-page';

export const ProgressBarStylingData: StylingPageData = {
  name: 'Progress Bar',
  variables: [
    {
      name: '--ard-progress-bar-width',
      description: 'Width of the host progress bar element.',
      default: '100%',
    },
    {
      name: '--ard-progress-bar-height',
      description: 'Default height of the progress bar.',
      default: '0.25rem',
    },
    {
      name: '--ard-progress-bar-margin',
      description: 'Margin applied to the progress bar host element.',
      default: '0.5rem 0',
    },
    {
      name: '--ard-progress-bar-background-opacity',
      description: 'Opacity of the background track behind the active progress indicator.',
      default: '30%',
    },
    {
      name: '--ard-progress-bar-buffer-opacity',
      description: 'Opacity of the buffer overlay in buffer mode.',
      default: '100%',
    },
    {
      name: '--ard-progress-bar-transition-duration',
      description: 'Animation duration used when the value or buffer changes smoothly.',
      default: '0.1s',
    },
    {
      name: '--ard-progress-bar-indeterminate-animation-duration',
      description: 'Duration of the indeterminate animation cycle.',
      default: '2.1s',
    },
    {
      name: '--ard-progress-bar-buffer-animation-distance',
      description: 'Distance traveled by the buffer animation pattern.',
      default: '0.5rem',
    },
    {
      name: '--ard-progress-bar-buffer-animation-duration',
      description: 'Duration of the buffer animation loop.',
      default: '0.4s',
    },
    {
      name: '--ard-progress-bar-currentColor-background-opacity',
      description: 'Background opacity when the color is set to currentColor.',
      default: '22.5%',
    },
    {
      name: '--ard-progress-bar-currentColor-overlay-buffer-opacity',
      description: 'Buffer overlay opacity when the color is set to currentColor.',
      default: '30%',
    },
  ],
};
