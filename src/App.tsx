import React from 'react';
import theme from 'utils/theme';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Wrapper from './wrapper';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
