import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import NotFound from './pages/404';
import Blank from './layouts';
import routes from './routes';

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={(
              <React.Fragment>
                <Blank>
                  <route.component />
                </Blank>
              </React.Fragment>
            )}
          />
        )
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
