import { GridTwoColumns } from '.';

import mock from './mock';

export default {
  title: 'Components/GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
