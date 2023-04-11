import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';

export const GridContent = ({ title, html, background }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading colorDark={!background} as="h2" uppercase>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
