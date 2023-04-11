import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';

export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading colorDark={!background} size="huge" uppercase>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridItem key={item.title}>
              <Heading colorDark={!background} size="medium">
                {item.title}
              </Heading>
              <TextComponent>{item.description}</TextComponent>
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
