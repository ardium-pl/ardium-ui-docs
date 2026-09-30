import dedent from 'dedent';
import { ApiPageData } from 'src/app/components/api-page';

export const CheckboxApiData: ApiPageData = {
  name: 'Checkbox',
  modules: [
    {
      name: 'ArdiumCheckboxModule',
      exports: 'ArdiumCheckboxComponent',
    },
  ],
  components: [
    {
      name: 'ArdiumCheckboxComponent',
      selector: 'ard-checkbox',
      exportedFrom: 'ArdiumCheckboxModule',
      description:
        'Boolean input component with a standard selected state, an indeterminate state, and support for custom icon or label templates.',
      inputs: [
        {
          name: 'label',
          type: 'string | boolean | null',
          description:
            'Display label text for the checkbox. Use a string for custom text, <code>true</code> to show the template-based label, or <code>null</code> to hide the label.',
          default: 'null',
          required: false,
        },
        {
          name: 'color',
          type: 'SimpleComponentColor',
          description: 'The color of the checkbox in selected state.',
          default: `'primary'`,
          required: false,
        },
        {
          name: 'unselectedColor',
          type: 'SimpleComponentColor',
          description: 'The color of the checkbox in unselected or indeterminate state.',
          default: `'none'`,
          required: false,
        },
        {
          name: 'state',
          type: 'CheckboxState',
          description:
            'Visual state of the checkbox. Accepts <code>unselected</code>, <code>indeterminate</code>, or <code>selected</code>.',
          default: `CheckboxState.Unselected`,
          required: false,
        },
        {
          name: 'reverseSelected',
          type: 'BooleanLike',
          description:
            'Inverts the visual representation of the checkbox state. When <code>true</code>, the selected state is shown as unselected, and vice versa.',
          default: 'false',
          required: false,
        },
        {
          name: 'disabled',
          type: 'BooleanLike',
          description: 'Disables interaction and reduces the visual emphasis of the checkbox.',
          default: 'false',
          required: false,
        },
        {
          name: 'readonly',
          type: 'BooleanLike',
          description: 'Prevents state changes but keeps the checkbox visible and readable.',
          default: 'false',
          required: false,
        },
      ],
      twoWayBindings: [
        {
          name: 'selected',
          type: 'boolean',
          description:
            'Boolean value of the checkbox. This two-way binding is synchronized with the component change events.',
          required: false,
        },
      ],
      outputs: [
        {
          name: 'select',
          type: 'null',
          description: 'Emitted when the checkbox transitions to the selected state.',
        },
        {
          name: 'unselect',
          type: 'null',
          description: 'Emitted when the checkbox transitions to the unselected state.',
        },
        {
          name: 'change',
          type: 'boolean',
          description: 'Alias event emitted for boolean value changes.',
        },
      ],
      templates: [
        {
          name: 'Checkbox icon template',
          selector: 'ng-template[ard-checkbox-tmp]',
          description: 'Creates the checkbox icon.',
          context: [
            {
              name: '$implicit',
              type: 'boolean',
              description: 'The current selected state of the checkbox.',
            },
            {
              name: 'selected',
              type: 'boolean',
              description:
                'The current selected state of the checkbox including the <code>reverseSelected</code> value.',
            },
            {
              name: 'internalSelected',
              type: 'boolean',
              description:
                'The current selected state of the checkbox NOT including the <code>reverseSelected</code> value.',
            },
            {
              name: 'state',
              type: 'CheckboxState',
              description: 'The current state of the checkbox including the <code>reverseSelected</code> value.',
            },
            {
              name: 'internalState',
              type: 'CheckboxState',
              description: 'The current state of the checkbox NOT including the <code>reverseSelected</code> value.',
            },
          ],
          defaultHtmlContent: dedent`
            <ng-template
              ard-checkbox-tmp
              let-state="state"
              let-selected="selected"
            >
              <ard-icon
                [icon]="
                  state === State.Selected
                    ? 'check_box'
                    : state === State.Unselected
                      ? 'check_box_outline_blank'
                      : 'indeterminate_check_box'
                "
                [filled]="state !== State.Indeterminate"
              />
            </ng-template>`,
        },
        {
          name: 'Label Template',
          selector: 'ng-template[ard-label-tmp]',
          description: 'Creates the label content for the checkbox.',
          context: [
            {
              name: '$implicit',
              type: 'string',
              description: 'The label text provided to the checkbox component.',
            },
            {
              name: 'label',
              type: 'string',
              description: 'The label text provided to the checkbox component.',
            },
          ],
          defaultHtmlContent: dedent`
            <ng-template ard-label-tmp let-label>
              {{ label }}
            </ng-template>`,
        },
      ],
    },
  ],
  injectionTokens: [
    {
      name: 'ARD_CHECKBOX_DEFAULTS',
      type: 'ArdCheckboxDefaults',
      description: 'Used to provide the default values for all Checkbox inputs.',
      allOptional: false,
    },
  ],
  interfaces: [
    {
      name: 'ArdCheckboxDefaults',
      description: 'Type used for providing default values for the Checkbox.',
    },
    {
      name: 'CheckboxTemplateContext',
      description: 'Type used to describe all properties of the checkbox icon template.',
    },
    {
      name: 'CheckboxLabelTemplateContext',
      description: 'Type used to describe all properties of the checkbox label template.',
    },
  ],
  functions: [
    {
      name: 'provideCheckboxDefaults',
      description: 'Function used to provide default values for the Checkbox, merging them with library defaults.',
      returnType: 'Provider',
      params: [
        {
          name: 'config',
          type: 'Partial<ArdCheckboxDefaults>',
          description: 'Object containing the new default values for the Checkbox.',
        },
      ],
    },
  ],
};
