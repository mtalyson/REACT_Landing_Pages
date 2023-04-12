import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    html: `<p>Feito com ❤ por Talyson Moreira</p>`,
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
