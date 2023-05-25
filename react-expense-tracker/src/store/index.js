import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expenseslice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loggerMiddleWare } from "./middleware/logger-middleware";

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // blacklist: ["EXPENSE"], // It will not show any data after reload the page
  whitelist: ["EXPENSE"], // it's for what you want to be store in db, after reload the page data will not de disappear
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleWare.middleware),
});

const persistore = persistStore(store);

export { store, persistore };
