import React, { PropsWithChildren } from 'react';
import { PageSection } from './PageSection';
import { Box } from '@mui/material';

/**
 * Wrapper component for markdown content that will 
 * apply styles to the inner html generated by the markdown.
 */
export const StyledMarkdown: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      className="styled-markdown"
      sx={{
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          marginBottom: 2,
          marginTop: 2,
        },
        '& h2:not(:first-of-type)': {
          borderTop: '2px dotted',
          borderTopColor: 'error.light',
          paddingTop: 2,
        },
        '& > *:last-child': {
          marginBottom: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};