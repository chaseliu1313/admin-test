import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useErrors } from '../../hooks';

const SInput = styled.input<{ er: string }>`
  border: none;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `0.5px solid ${theme.palette.primary.main}`};
  background-color: ${({ theme, er }) =>
    er !== '' ? theme.palette.error.main : theme.palette.primary.light};
  height: 40px;
  width: 300px;
  margin: 5px 0;
  &:focus {
    outline: none;
  }
`;
export const ErrorMsg = styled.p`
  ${({ theme }) => `
font-size: ${theme.fontSize.caption}px;
font-weight: ${theme.fontWeight.caption};
color: ${theme.palette.error.main};
`}
  text-align: left;
  line-height: 1em;
  margin-top: -20px;
  padding
`;
type Props = {
  type: string;
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  errorMessage?: string;
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const StyledInput = ({
  type,
  placeHolder,
  autoComplete,
  onChange,
  value,
  required,
  disabled,
  handleKeyDown
}: Props): ReactElement => {
  const [errMsg, setErrMsg] = useState<string>('');
  const { error, setError } = useErrors();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleValidation = (): void => {
    if (value) {
      if (error.loginError) {
        setError({ ...error, loginError: '' });
      }
      if (type === 'email') {
        if (!emailRegex.test(value)) {
          setErrMsg('Please enter a valid email address.');
        } else {
          setErrMsg('');
        }
      }
    }
  };

  return (
    <>
      <SInput
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeHolder}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        onBlur={() => handleValidation()}
        er={errMsg}
        onKeyDown={(e) => {
          if (handleKeyDown) {
            handleKeyDown(e);
          }
        }}
      />
      <ErrorMsg>{errMsg}</ErrorMsg>
    </>
  );
};
