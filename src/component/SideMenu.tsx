import React, { ReactElement, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Menu, useSidebarState, DashboardMenuItem } from 'react-admin';
import { FaTruck } from 'react-icons/fa';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdDashboard, MdDownload, MdLocationPin } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';
import { RxCounterClockwiseClock } from 'react-icons/rx';

type MenuItemData = {
  label: string;
  icon: JSX.Element;
  to: string;
};

const menuItems: MenuItemData[] = [
  { label: 'Dashboard', icon: <MdDashboard style={{ height: 24, width: 24 }} />, to: '/users' },
  { label: 'Trucks', icon: <FaTruck style={{ height: 24, width: 24 }} />, to: '/users' },
  { label: 'Load Types', icon: <MdDownload style={{ height: 24, width: 24 }} />, to: '/users' },
  {
    label: 'Receiving Sites',
    icon: <MdLocationPin style={{ height: 24, width: 24 }} />,
    to: '/users'
  },
  {
    label: 'Activity Logs',
    icon: <RxCounterClockwiseClock style={{ height: 24, width: 24 }} />,
    to: '/users'
  },
  { label: 'User Management', icon: <HiUsers style={{ height: 24, width: 24 }} />, to: '/users' }
];

export const SideMenu = (): ReactElement => {
  const [open, setOpen] = useSidebarState();
  const [menuItemSelected, setMenuItemSelected] = useState<string>('');
  const theme = useTheme();
  const handleMenuSelect = (label: string): void => {
    setMenuItemSelected(label);
  };
  return (
    <Menu sx={{ backgroundColor: theme.palette.background.paper, height: '100vh' }}>
      <DashboardMenuItem
        onClick={() => {
          setOpen(!open);
        }}
        sx={{
          height: 60,
          color: `${theme.palette.primary.main} !important`,
          borderBottom: `0.25px solid ${theme.palette.primary.main}`
        }}
        leftIcon={
          open ? (
            <AiOutlineMenuFold
              style={{ height: 24, width: 24, color: theme.palette.primary.main }}
            />
          ) : (
            <AiOutlineMenuUnfold style={{ height: 24, width: 24 }} />
          )
        }
        primaryText={open ? 'Close' : ' '}
      />
      {menuItems.map((m) => (
        <DashboardMenuItem
          to={m.to}
          onClick={() => {
            handleMenuSelect(m.label);
          }}
          leftIcon={m.icon}
          primaryText={m.label}
          key={m.label}
          sx={{
            height: 45,
            color:
              menuItemSelected === m.label
                ? `${theme.palette.primary.contrastText} !important`
                : `${theme.palette.primary.main} !important`,
            backgroundColor:
              menuItemSelected === m.label
                ? `${theme.palette.background.default} !important`
                : `${theme.palette.background.paper} !important`,
            '& .MuiListItemIcon-root': {
              color:
                menuItemSelected === m.label
                  ? `${theme.palette.primary.contrastText} !important`
                  : `${theme.palette.primary.main} !important`
            }
          }}
        />
      ))}
    </Menu>
  );
};
