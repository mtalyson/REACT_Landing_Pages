import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;

    p {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
