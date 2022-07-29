import React, { useEffect, useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import NotFound from './pages/404';
import Blank from './layouts';
import routes from './routes';
import { AppContext, AppContextProps } from 'store';

function App() {
  const [rootState, setRootState] = useState<AppContextProps>({
    posts: [],
  });

  useEffect(() => {
    setRootState(prev => ({
      ...prev,
      posts: [
        { id: '1', title: 'First Post!', content: 'Hello!' },
        { id: '2', title: 'Second Post', content: 'More text' }
      ]}));
    }, []);

  return (
    <AppContext.Provider value={rootState}>
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
    </AppContext.Provider>
  )
}

export default App
