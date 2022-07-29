import { createContext } from 'react';

export interface AppContextProps {
  posts: any[];
}

const initialContext: AppContextProps = {
  posts: [],
};

export const AppContext = createContext(initialContext);
