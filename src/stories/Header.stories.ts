import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import Header from './header.component';
import {HeaderComponent} from '../app/@core/header/header.component';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

export default {
  title: 'Core/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule, FontAwesomeModule],
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    }
  }
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  props: args,
});

export const Mobile = Template.bind({
});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
};

export const Desktop = Template.bind({
});
Mobile.args = {
  user: {},
};
