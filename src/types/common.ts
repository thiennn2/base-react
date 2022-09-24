import { MenuProps } from 'antd';

export interface IFilter {
  startDate?: string;
  endDate?: string;
}

export interface ITheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  'base-100': string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export type IMenu = Required<MenuProps>['items'][number];

export interface IMeInfoState {
  id: number;
  username: string;
}
