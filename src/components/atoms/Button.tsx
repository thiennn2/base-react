import React from 'react';
import styled from 'styled-components';
import { Button as ButtonAntd } from 'antd';

const Button = styled(ButtonAntd)`
  && {
    ${({ theme, type }) => {
    switch (type) {
      case 'primary':
        return `
            background:  ${theme.primary};
            color: ${theme['base-100']};
            border-color: ${theme.primary};
          `;
      case 'link':
        return `
            color: ${theme.primary};
          `;
      case 'default':
        return `
            color: ${theme.primary};
            border-color: ${theme.primary};
          `;
      case 'text':
      default:
        return `

        `;
    }
  }}

    &:active,
    &:hover {
      ${({ theme, type }) => {
    switch (type) {
      case 'primary':
        return `
              background:  ${theme.primary};
              color: ${theme['base-100']};
              border-color: ${theme.primary};
              opacity: 0.75;
            `;
      case 'link':
        return `
              border-color: transparent;
            `;
      case 'text':
        return '';
      case 'dashed':
      default:
        return '';
    }
  }}
    }

    &:active {
      // animation: none;
      transform: scale(var(--btn-focus-scale,.95));
    }
  }
`;

export default Button;
