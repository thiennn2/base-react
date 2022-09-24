import { sendGet } from 'utils/axios';

export const getLines = (params?: any) => sendGet('/lines', params);
