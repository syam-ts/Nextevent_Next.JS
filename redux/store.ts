import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import organizerReducer from "./slices/oranizerSlice";
import guestReducer from "./slices/guestSlice";
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

const organizerPersistConfig = {
    key: "organizer",
    storage,
};

const guestPersistConfig = {
    key: "guest",
    storage,
};

const organizerPersistedReducer = persistReducer(
    organizerPersistConfig,
    organizerReducer
);
const guestPersistedReducer = persistReducer(guestPersistConfig, guestReducer);

const rootReducer = combineReducers({
    organizer: organizerPersistedReducer,
    guest: guestPersistedReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
