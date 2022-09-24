import { endOfWeek as endOfWeekFn, startOfWeek as startOfWeekFn } from 'date-fns';

export const startOfWeek = (date: Date|number) => startOfWeekFn(date, { weekStartsOn: 1 });
export const endOfWeek = (date: Date|number) => endOfWeekFn(date, { weekStartsOn: 1 });
