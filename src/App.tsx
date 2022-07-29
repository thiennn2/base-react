import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import Blank from './layouts';
import routes from './routes';

function App() {
  return (
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
  );
}

export default App;
