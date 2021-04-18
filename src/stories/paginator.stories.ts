import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {PaginatorComponent} from '../app/@shared/paginator/paginator.component';
import {PaginatorElementComponent} from '../app/@shared/paginator/paginator-element/paginator-element.component';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Shared/Paginator',
  component: PaginatorComponent,
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [
        PaginatorComponent,
        PaginatorElementComponent
      ],
      imports: [
        CommonModule
      ],
    }),
  ],
} as Meta;

export const actionsData = {
  handlePageClick: action('handlePageClick', {allowFunction: true})
};

const Template: Story<PaginatorComponent> = (args: PaginatorComponent) => ({
  props: {
    ...args,
    component: PaginatorComponent,
    handlePageClick: actionsData.handlePageClick,
  },
});

export const Default = Template.bind({});
Default.args = {
  currentPage: 5,
  previousPages: [1, '...', 2, 3, 4],
  nextPages: [6, 7, 8, '...', 10]
};

