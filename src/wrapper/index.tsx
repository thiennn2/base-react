import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCookie } from 'utils/cookie';
import routes from 'routes';
import NotFound from 'pages/404';
import Blank from 'components/templates/Blank';

function Wrapper() {
  const token = getCookie('token');
  return (
    <Routes>
      {routes.map((route, index) => {
        const Layout = route.layout ?? React.Fragment;
        if (route.isAuth) {
          return (
            <Route
              key={index}
              path={route.path}
              element={!token
                ? <Navigate replace to="/login" />
                : (
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
        }
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

export default Wrapper;
