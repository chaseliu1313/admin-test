import { Tooltip, IconButton, Avatar } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { useUser } from '../hooks';
import UserIcon from '../asset/icon/user.png';
import { animated, useSpring } from '@react-spring/web';
import { Button } from './atoms';
import { useLogout, useSidebarState } from 'react-admin';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  z-index: 1100;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  align-items: center;
  justify-content: space-between;
`;

const SubContainer = styled.div`
  height: 100%;
  min-width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  flex-direction: column;
`;

const SubLogo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.caption}px;
  font-weight: ${({ theme }) => theme.fontSize.caption};
  margin-block: unset;
`;

export const StyledAppBar = (): ReactElement => {
  const theme = useTheme();
  const { userName } = useUser();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) setAnchorEl(null);
    else setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Container>
        <SubContainer>
          <h5 style={{ marginBlock: 'unset' }}>TRUCK LOG</h5>
          <SubLogo>SITE PREPARETION LTD</SubLogo>
        </SubContainer>
        <SubContainer style={{ flexDirection: 'row' }}>
          <SubLogo>{userName}</SubLogo>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <Avatar sx={{ width: 32, height: 32, color: theme.palette.primary.main }}>
                {userName.length > 2 ? (
                  userName[0].toUpperCase() + userName[1].toUpperCase()
                ) : (
                  <img src={UserIcon} height="20px" alt="user icon" />
                )}
              </Avatar>
            </IconButton>
          </Tooltip>
        </SubContainer>
      </Container>
      <Menu anchorEl={anchorEl} />
    </>
  );
};

const MenuContainer = styled.div`
  width: 240px;
  height: 100px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 15px;
  z-index: 1000;
  position: absolute;
  transform-origin: top right;
  top: 65px;
  right: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const MenuItem = styled.div<{ divider?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  border-bottom: ${(props) => (props.divider ? '0.5px solid grey' : 'none')};
`;

const AnimatedMenuContainer = animated(MenuContainer);

const Menu = ({ anchorEl }: { anchorEl: null | HTMLElement }): ReactElement => {
  const logout = useLogout();

  const [springs, api] = useSpring(() => ({
    from: { scale: 0.5, opacity: 0, height: 50 }
  }));

  useEffect(() => {
    if (anchorEl) {
      api.start({
        from: { scale: 0.5, opacity: 0, height: 50 },
        to: { scale: 1, opacity: 1, height: 100 }
      });
    } else {
      api.start({
        from: { scale: 1, opacity: 1, height: 100 },
        to: { scale: 0.5, opacity: 0, height: 50 }
      });
    }
  }, [anchorEl]);
  return (
    <AnimatedMenuContainer style={{ ...springs }}>
      <MenuItem divider>
        <Button
          variant="text"
          size="large"
          onClick={() => {
            console.log('account setting');
          }}
          color="primary"
          label="Account Settings"
        />
      </MenuItem>
      <MenuItem>
        <Button
          variant="text"
          size="large"
          onClick={() => {
            logout();
          }}
          color="primary"
          label="Logout"
        />
      </MenuItem>
    </AnimatedMenuContainer>
  );
};
