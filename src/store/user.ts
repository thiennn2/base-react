import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { IMeInfoState } from 'types/common';

export const initialStateValue = '';

export interface IMeSliceState {
  me: IMeInfoState | undefined | null;
}

export const userSlice = createSlice<IMeSliceState, SliceCaseReducers<IMeSliceState>>({
  name: 'userSlice',
  initialState: {
    me: undefined,
  },
  reducers: {
    setUserInfo: (state: IMeSliceState, action: PayloadAction<IMeInfoState>) => ({
      ...state,
      me: action.payload,
    }),
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
