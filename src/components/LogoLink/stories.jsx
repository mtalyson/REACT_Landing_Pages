import { LogoLink } from '.';

export default {
  title: 'Components/LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
};

export const TemplateImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TemplateText = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TemplateText.args = {
  srcImg: '',
};

TemplateText.argTypes = {
  srcImg: {
    table: {
      disable: true,
    },
  },
};
