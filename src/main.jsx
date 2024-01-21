import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { theme } from "./styles/theme.jsx";
import { store, persistor } from "./redux/store.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <ThemeProvider theme={theme}>
   <GlobalStyles />
   <BrowserRouter basename="/">
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <App />
     </PersistGate>
    </Provider>
   </BrowserRouter>
  </ThemeProvider>
 </React.StrictMode>
);
