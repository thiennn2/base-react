import loadable from 'utils/loadable';
import Auth from 'components/templates/Auth';

export enum ROUTES {
  Home = '/',
  Login = '/login',
  ForgotPassword = '/forgot-password',
}

const Home = loadable(() => import('pages'));
const Login = loadable(() => import('pages/login'));
const ForgotPassword = loadable(() => import('pages/forgot-password'));

const routes = [
  // NEED AUTHENTICATED
  { exact: true, path: ROUTES.Home, component: Home, layout: Auth, isAuth: true },

  // NO AUTH
  { exact: true, path: ROUTES.Login, component: Login, layout: null, isAuth: false },
  { exact: true, path: ROUTES.ForgotPassword, component: ForgotPassword, layout: null, isAuth: false },
];

export default routes;
