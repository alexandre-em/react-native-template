import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../';
import { storageKeys } from '../../constants/storage';
import { authAxios, noAuthAxios } from '../../lib/axios';

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
  const tokens = (await noAuthAxios.instance!.post<LoginResponseType>('/auth/login', input)).data;

  await AsyncStorage.setItem(storageKeys.ACCESS_TOKEN, tokens.accessToken);
  await AsyncStorage.setItem(storageKeys.REFRESH_TOKEN, tokens.refreshToken!);

  return tokens;
});

export const refresh = createAsyncThunk<LoginResponseType, undefined>('auth/refresh', async (_, { getState }) => {
  const { auth } = getState() as RootState;
  const tokens = (
    await authAxios.instance!.post<LoginResponseType>('/auth/token/refresh', {
      refresh: auth.refreshToken,
    })
  ).data;

  await AsyncStorage.setItem(storageKeys.ACCESS_TOKEN, tokens.accessToken);

  return tokens;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessTokenHeader: (state, action) => {
      state.accessToken = action.payload;
      authAxios.addAccessTokenHeader(action.payload);
    },
  },
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

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
export default authSlice.reducer;
