import React, { ReactElement, useState } from 'react';
import { useLogin } from 'react-admin';
import styled, { useTheme } from 'styled-components';
import bg from '../asset/bg2.png';
import { Button, StyledInput, ErrorMsg } from '../component/atoms';
import { useErrors } from '../hooks';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
`;

const Card = styled.div`
  position: relative;
  min-width: 374px;
  min-height: 600px;
  width: 35%;
  height: 70%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.primary.contrastText};
`;

const LogoContainer = styled.div`
  min-width: 300px;
  height: 210px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoRow = styled.div<{ align: string; background: string }>`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background};
  align-items: ${(props) => props.align};
  flex-direction: row;
`;

const LogoLabel = styled.body`
  line-height: unset;
  letter-spacing: 7.5px;
  ${({ theme }) => `font-size: ${theme.fontSize.h6}px; 
  font-weight: ${theme.fontWeight.body2};`}
  user-select: none;
`;

const LogoText = styled.h1<{ padding: string; color: string }>`
  text-transform: uppercase;
  font-size: 72px;
  ${({ padding, color }) => `
  padding: ${padding};
  color: ${color};
  `}
  user-select: none;
`;

const CompanyLabel = styled.body`
  font-size: 14px;
  line-height: 1em;
  color: ${(props) => props.theme.palette.primary.contrastText};
  text-align: left;
  padding: 15% 0 0 5%;
  user-select: none;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 45%;
  width: 100%;
  min-width: 374px;
`;

const EndContainer = styled.div`
  height: 20%;
  width: 100%;
  min-width: 374px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const LoginPage = (): ReactElement => {
  const theme = useTheme();
  const login = useLogin();
  const { error } = useErrors();
  const [userLogin, setUserLogin] = useState<{ email: string; psw: string }>({
    email: '',
    psw: ''
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleSubmit = (): void => {
    if (userLogin.email === '' || userLogin.psw === '') {
      setErrorMessage('empty');
    } else {
      setErrorMessage('');
      login({ username: userLogin.email, password: userLogin.psw });
    }
  };

  return (
    <Container>
      <Card>
        <LogoContainer>
          <LogoRow align="center" background={theme.palette.background.default}>
            <LogoText padding="0" color={theme.palette.primary.contrastText}>
              Truck
            </LogoText>
          </LogoRow>
          <LogoRow align="center" background={theme.palette.background.default}>
            <div style={{ width: '40%', height: '100%' }}>
              <CompanyLabel>SITE PREPARATION LTD</CompanyLabel>
            </div>
            <LogoText padding="0 0 5% 15%" color={theme.palette.primary.light}>
              LOG
            </LogoText>
          </LogoRow>
          <LogoRow align="flex-start" background={theme.palette.primary.contrastText}>
            <LogoLabel>Operations Portal</LogoLabel>
          </LogoRow>
        </LogoContainer>
        <StyledForm>
          <StyledInput
            type="email"
            required
            value={userLogin.email}
            placeHolder="Enter Email ..."
            errorMessage={errorMessage}
            onChange={(e) => {
              setUserLogin({ ...userLogin, email: e.target.value });
            }}
          />
          <StyledInput
            type="password"
            value={userLogin.psw}
            required
            errorMessage={errorMessage}
            placeHolder="Enter Password ..."
            onChange={(e) => {
              setUserLogin({ ...userLogin, psw: e.target.value });
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            size="large"
            color="primary"
            label="login"
          />
          <ErrorMsg>{error.loginError}</ErrorMsg>
        </StyledForm>
        <EndContainer>
          <Button
            variant="text"
            onClick={() => {
              console.log('forgot psw');
            }}
            size="large"
            color="primary"
            label="Forgot your password?"
          />
        </EndContainer>
        <ErrorMsg
          style={{
            color: theme.palette.primary.main,
            position: 'absolute',
            bottom: 0,
            left: '43%'
          }}>
          version 0.1
        </ErrorMsg>
      </Card>
    </Container>
  );
};

export default LoginPage;
