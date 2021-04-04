import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import {HeaderComponent} from '../app/@core/header/header.component';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BurgerButtonComponent} from '../app/@core/header/burger-button/burger-button.component';

export default {
  title: 'Core/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [BurgerButtonComponent],
      imports: [CommonModule, FontAwesomeModule],
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    }
  }
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Small = Template.bind({
});
Small.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
};

export const Large = Template.bind({
});
