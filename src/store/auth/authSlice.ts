import { useDispatch } from 'react-redux';
import { Action, createSlice, ThunkAction } from '@reduxjs/toolkit'
import { store, RootState } from '../store';

export interface TemaplateState {
    status: Status;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoUrl: string | null;
    errorMessage: string | null;

  }
  
const initialState: TemaplateState = {
    status: 'not-authenticated', // 'not-authenticated','authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
}

type Status = 'checking' | 'not-authenticated' | 'authenticated'


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, action ) => {

    },
    logout: ( state, payload ) => {

    },
    checkingCredentials: ( state ) => {
      state.status = 'checking'
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
