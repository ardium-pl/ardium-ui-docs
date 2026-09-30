import { StylingPageData } from 'src/app/components/styling-page';

export const CheckboxStylingData: StylingPageData = {
  name: 'Checkbox',
  variables: [
    {
      name: '--ard-checkbox-size',
      description: 'Width and height of the checkbox control.',
      default: '1.25em',
    },
    {
      name: '--ard-checkbox-icon-size',
      description: 'Font size used by the inline icon rendered inside the checkbox.',
      default: '1.8em',
    },
    {
      name: '--ard-checkbox-hitbox-offset',
      description: 'Padding offset of the invisible hitbox around the checkbox.',
      default: '-4px',
    },
    {
      name: '--ard-checkbox-overlay-offset',
      description: 'Offset used for the focus overlay ring around the checkbox.',
      default: '0.4em',
    },
    {
      name: '--ard-checkbox-unselected-disabled-opacity',
      description: 'Opacity of an unchecked checkbox when disabled.',
      default: '40%',
    },
    {
      name: '--ard-checkbox-indeterminate-disabled-opacity',
      description: 'Opacity of an indeterminate checkbox when disabled.',
      default: '50%',
    },
    {
      name: '--ard-checkbox-selected-disabled-opacity',
      description: 'Opacity of a selected checkbox when disabled.',
      default: '50%',
    },
    {
      name: '--ard-checkbox-alignment',
      description: 'Vertical alignment of the checkbox relative to the label.',
      default: 'center',
    },
    {
      name: '--ard-checkbox-spacing',
      description: 'Gap between the checkbox and the label content.',
      default: '0.375em',
    },
    {
      name: '--ard-checkbox-label-font-size',
      description: 'Font size of the checkbox label.',
      default: '0.875em',
    },
    {
      name: '--ard-checkbox-label-font-weight',
      description: 'Font weight of the checkbox label.',
      default: '400',
    },
    {
      name: '--ard-checkbox-label-cursor',
      description: 'Mouse cursor shown when hovering the label area.',
      default: 'pointer',
    },
    {
      name: '--ard-checkbox-label-disabled-opacity',
      description: 'Opacity of the checkbox label when the control is disabled.',
      default: '50%',
    },
    {
      name: '--ard-checkbox-label-max-width',
      description: 'Maximum width of the label text container.',
      default: '100%',
    },
  ],
};
