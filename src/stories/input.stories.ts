import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {InputComponent} from '../app/@shared/input/input.component';
import {FormsModule} from '@angular/forms';

export default {
  title: 'Shared/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule
      ],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Default = Template.bind({
});
Default.args = {
  label: 'Default',
  id: 'default'
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
  isOnFocus: true
};
Focused.parameters = { pseudo: { active: true } };

