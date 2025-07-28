"use client";

import React from "react";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = ({children}: ReduxProviderProps) => {
    return (
        <div>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    {children}
                </PersistGate>
            </Provider>
        </div>
    );
};

export default ReduxProvider;
