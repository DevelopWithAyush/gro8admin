import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dashboardApi } from './features/dashboardApi'
import { managementApi } from './features/managementApi'
import mentorMetadataReducer from './features/mentorMetadataSlice'

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [managementApi.reducerPath]: managementApi.reducer,
    mentorMetadata: mentorMetadataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dashboardApi.middleware,
      managementApi.middleware
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 