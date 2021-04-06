import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {CharacterCardComponent} from '../app/@views/characters/character-card/character-card.component';

const characterMock = {
  appearance: [1, 2, 3, 4, 5],
  birthday: '09-07-1958',
  category: 'Breaking Bad',
  char_id: 1,
  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
  name: 'Walter White',
  nickname: 'Heisenberg',
  occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
  portrayed: 'Bryan Cranston',
  status: 'Presumed dead'
};

const getCharacterWithSelectedStatus = (status: string) => ({
  ...characterMock,
  status
});

export default {
  title: 'Views/Characters/CharacterCard',
  argTypes: {
    status: {
      type: 'select',
      options: ['Alive', 'Deceased', 'Presumed dead']
    }
  },
  component: CharacterCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    }
  },
  args: {
    character: characterMock,
  },
} as Meta;

const Template: Story<CharacterCardComponent> = (args: CharacterCardComponent | any) => {
  const {status} = args;
  return {
    component: CharacterCardComponent,
    props: {
      ...args,
      character: status ? getCharacterWithSelectedStatus(status) : args.character
    }
  };
};

export const Small = Template.bind({
});
Small.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
};

export const Large = Template.bind({
});

