import React, { ReactElement } from 'react';
import styled from 'styled-components';

export type ButtonType = 'outlined' | 'contained' | 'text';
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'success' | 'warning';
export type ButtonSize = 'xl' | 'large' | 'normal' | 'small' | 'xs';

type Props = {
  onClick: () => void;
  label: string;
  variant: ButtonType;
  color: ButtonColor;
  size: ButtonSize;
  disabled?: boolean;
};

const ButtonContainer = styled.button<{
  variant: ButtonType;
  color: ButtonColor;
  size: ButtonSize;
}>`
  ${({ variant, color, size, theme }) => {
    const palette = theme.palette;
    const c =
      color === 'secondary'
        ? palette.secondary.main
        : color === 'error'
        ? palette.error.main
        : color === 'success'
        ? palette.success.main
        : color === 'warning'
        ? palette.warning.main
        : palette.primary.main;
    let bgColor = c;
    let borderColor = c;
    const textColor = variant === 'contained' ? palette.primary.contrastText : c;

    if (variant === 'text') {
      bgColor = palette.primary.contrastText;
      borderColor = palette.primary.contrastText;
    } else if (variant === 'outlined') {
      bgColor = palette.primary.contrastText;
    }
    return `
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    color: ${textColor};
    background-color: ${bgColor};
    border: ${variant === 'text' ? 'none' : '1px solid ' + borderColor};
    height: ${size === 'xl' ? '60px' : '30px'};
    width: ${
      size === 'xl' || size === 'large'
        ? '260px'
        : size === 'normal'
        ? '120px'
        : size === 'small'
        ? '60px'
        : '45px'
    };
     > label {
       text-transform: capitalize;
       cursor: pointer;
       font-size: ${theme.fontSize.buttonText};
       font-weight: ${theme.fontWeight.buttonText};
    }
    `;
  }}
`;

const Label = styled.label``;

export const Button = ({ onClick, label, variant, color, disabled, size }: Props): ReactElement => {
  return (
    <ButtonContainer
      variant={variant}
      color={color}
      disabled={disabled}
      size={size}
      onClick={onClick}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};
