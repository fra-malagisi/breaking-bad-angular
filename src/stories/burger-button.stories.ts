import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BurgerButtonComponent} from '../app/@core/header/burger-button/burger-button.component';
import {Small} from './header.stories';
import {Focused} from './input.stories';

export default {
  title: 'Core/Header/BurgerButton',
  component: BurgerButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FontAwesomeModule],
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    }
  }
} as Meta;

const Template: Story<BurgerButtonComponent> = (args: BurgerButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({
});

Default.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
};

export const Active = Template.bind({
});

Active.parameters = {
  ...Default.parameters,
  pseudo:
    {
      active: true
    }
};
