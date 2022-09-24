import { ROUTES } from 'routes';
import { getCookie, removeCookie, setCookie } from './cookie';
import navigate from './history';

export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
}

export const hasOwn = Object.prototype.hasOwnProperty;

export const getFileName = (path: string) => {
  const index = path.lastIndexOf('/');
  return path.substring(index + 1);
};

interface IHandleLogin {
  accessToken: string;
  expiresOn?: Date | null;
  callbackUrl?: string;
}

export const handleLogin = ({ accessToken, expiresOn, callbackUrl }: IHandleLogin) => {
  if (typeof window === 'undefined' || !accessToken) return;
  const expires = expiresOn ? +new Date(expiresOn) : 9999;
  setCookie('token', accessToken, {
    expires,
  });
  if (getCookie('token')) {
    navigate.push(callbackUrl ?? '/');
    window.location.reload();
  }
};

export const handleLogout = (callbackUrl = ROUTES.Login) => {
  removeCookie('token');
  removeCookie('refreshToken');
  // localStorage.clear();
  navigate.push(callbackUrl);
};


export const getParamsWithoutFalsy = (params: any) => {
  const result: {
    [key: string]: any;
  } = {};
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      result[key] = params[key];
    }
  });
  return result;
};
