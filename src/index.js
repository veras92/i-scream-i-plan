import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { CustomThemeProvider } from './shared/styles/CustomThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
