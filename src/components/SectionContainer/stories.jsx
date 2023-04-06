import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et
          accusamus nemo omnis praesentium officia autem reprehenderit aliquam!
          Vel quasi, modi officia rem illum alias porro nesciunt fugit
          exercitationem tempore.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
