import React from 'react';
import { IFilter } from 'types/common';

export enum ActionKind {
  SetFilter = 'teacher/SetFilter',
}

export interface ITeacherState {
  filters: IFilter,
}

interface Action {
  type: ActionKind;
  payload: any;
}

export const initialValue: ITeacherState = {
  filters: {},
};

export const TeacherContext = React.createContext<ITeacherState>(initialValue);

export function reducer(state: ITeacherState, action: Action) {
  switch (action.type) {
    case ActionKind.SetFilter: {
      return {
        ...state,
        filters: action.payload,
      };
    }
    default:
      return state;
  }
}

export const setFilter = (payload: IFilter) => ({ type: ActionKind.SetFilter, payload });
