import * as React from 'react';
import { Box, Breadcrumbs, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';
import { Link } from 'gatsby';

interface BaseLayoutProps extends React.PropsWithChildren {
  hasSidebar?: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  hasSidebar,
  children
}) => {
  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs);
  return (
    <Box
      id="base-layout"
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      <Stack
        direction="row"
        sx={{
          height: '100%'
        }}
      >
        {hasSidebar && (
          <Sidebar />
        )}
        <Box
          sx={{
            flex: 1,
            height: '100%',
            width: '100%',
            paddingTop: '3rem'
          }}
        >
          <Breadcrumbs 
            aria-label="breadcrumb"
            sx={{
              padding: 2
            }}
          >
            {breadcrumbs.map((breadcrumb, i) => {
              if (i === breadcrumbs.length - 1) {
                return (
                  <Typography color="text.primary">{breadcrumb.label}</Typography>
                )
              } else {
                return (
                  <Link to={breadcrumb.path || '#'}>
                    {breadcrumb.path === '/' && (
                      <HomeIcon />
                    )}
                    {breadcrumb.path !== '/' && (
                      breadcrumb.label
                    )}
                  </Link>
                )
              }
            })}
          </Breadcrumbs>
          <Box
            component="main"
          >
            {children}
          </Box>
          <Footer containerWidth={hasSidebar ? 'md' : 'lg'} />
        </Box>
      </Stack>
    </Box>
  )
};

export default BaseLayout;