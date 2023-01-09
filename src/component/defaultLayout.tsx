import React, { ReactElement, useEffect } from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { useTheme } from 'styled-components';
import { StyledAppBar } from './appBar';
import { SideMenu } from './SideMenu';

export const PageLayout = (props: LayoutProps): ReactElement => {
  const theme = useTheme();
  return (
    <Layout
      {...props}
      appBar={StyledAppBar}
      menu={SideMenu}
      sx={{
        '& #main-content': {
          backgroundColor: theme.palette.primary.light
        }
      }}
    />
  );
};
