import { configureStore, combineReducers } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { gameSlice } from "./slices/game"
import { userSlice } from "./slices/user"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistStore, persistReducer } from "redux-persist"

const rootReducer = combineReducers({
  user: userSlice.reducer,
  game: gameSlice.reducer,
})

const persistedRootReducer = persistReducer(
  { key: "root", storage: AsyncStorage },
  rootReducer
)

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
