import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import {PaginatorElementComponent} from '../app/@shared/paginator/paginator-element/paginator-element.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Shared/Paginator/PaginatorElement',
  component: PaginatorElementComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const actionsData = {
  onClick: action('onClick'),
  isNotDotsOrActive: action('isNotDotsOrActive'),
  isDots: action('isDots')
};

const Template: Story<PaginatorElementComponent> = args => ({
  component: PaginatorElementComponent,
  props: {
    ...args,
    onClick: actionsData.onClick,
    isNotDotsOrActive: actionsData.isNotDotsOrActive,
    isDots: actionsData.isDots
  },
});

export const Default = Template.bind({});
Default.args = {
  pageNumber: 1
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
};
Hovered.parameters = { pseudo: { hover: true } };

