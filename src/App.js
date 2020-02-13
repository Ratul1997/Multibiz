import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./reducer/index";
import AppNavigation from "./AppNavigation";
import NavigationService from "./NavigationService";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { MenuProvider } from 'react-native-popup-menu';
import { Text } from "react-native";

export default class App extends Component {

  render() {
    return (
      <MenuProvider>
        <Provider store={store}>
          <PersistGate persistor={persistStore(store)}>
            <AppNavigation
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </PersistGate>
        </Provider>
      </MenuProvider>

    );
  }
}
