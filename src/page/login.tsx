import React, { ReactElement } from 'react';
import styled, { useTheme } from 'styled-components';
import bg from '../asset/bg2.png';
import { Button } from '../component/atoms';

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
  min-width: 299px;
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

const Input = styled.input``;

const LoginPage = (): ReactElement => {
  const theme = useTheme();
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
        <Button
          variant="contained"
          onClick={() => {
            console.log('clicked');
          }}
          size="large"
          color="primary"
          label="login"
        />
      </Card>
    </Container>
  );
};

export default LoginPage;
