import styled from 'styled-components'
import { style, theme } from '../theme.config'

export const Button = styled.a`
  color: inherit;
  font-family: inherit;
  border-radius: ${style.radius()};
  color: ${style.text('white')};
  display: block;
  text-align: center;
  transition-property: box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: linear;

  ${({ display = 'block' }) => `
    display: ${display}
  `};

  ${({ size }) => `
    padding: ${theme.spacers.get(size)};
  `};

  ${({ color }) => `
    background-color: ${style.color(color)}
    :hover {
      box-shadow: ${style.glow(color)}
    }
  `};
`
