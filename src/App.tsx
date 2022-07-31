import React from 'react';
import theme from 'utils/theme';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Blank from './layouts';
import NotFound from './pages/404';
import routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map((route, index) => {
          const Layout = route.layout ?? React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={(
                <React.Fragment>
                  <Blank>
                    <Layout>
                      <route.component />
                    </Layout>
                  </Blank>
                </React.Fragment>
              )}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
