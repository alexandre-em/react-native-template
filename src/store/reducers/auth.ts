import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../';
import { authAxios, noAuthAxios } from '@/lib/axios';

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  loginStatus: RequestStatusType;
  refreshStatus: RequestStatusType;
  registerStatus: RequestStatusType;
}

const initialState: UserState = {
  accessToken: null,
  refreshToken: null,
  loginStatus: 'idle',
  refreshStatus: 'idle',
  registerStatus: 'idle',
};

type LoginInputType = {
  email: string;
  password: string;
};

type LoginResponseType = {
  accessToken: string;
  refreshToken?: string;
};

export const login = createAsyncThunk<LoginResponseType, LoginInputType>('auth/login', async input => {
  return (await noAuthAxios.instance!.post<LoginResponseType>('/auth/login', input)).data;
});

export const refresh = createAsyncThunk<LoginResponseType, undefined>('auth/refresh', async (_, { getState }) => {
  const { auth } = getState() as RootState;
  return (
    await authAxios.instance!.post<LoginResponseType>('/auth/token/refresh', {
      refresh: auth.refreshToken,
    })
  ).data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loginStatus = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      authAxios.addAccessTokenHeader(action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken ?? null;
      state.loginStatus = 'succeeded';
    });
    builder.addCase(login.rejected, state => {
      state.loginStatus = 'failed';
    });
    builder.addCase(refresh.pending, state => {
      state.loginStatus = 'pending';
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      authAxios.addAccessTokenHeader(action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = null;
      state.loginStatus = 'succeeded';
    });
    builder.addCase(refresh.rejected, state => {
      state.loginStatus = 'failed';
    });
  },
});

export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
export default authSlice.reducer;
