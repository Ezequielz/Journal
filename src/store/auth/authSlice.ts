import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    status: Status;
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoUrl: string | null;
    errorMessage: string | null;

  }
  
const initialState: CounterState = {
    status: 'checking', // 'not-authenticated','authenticated'
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

    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions