import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { store, persistor } from "./redux/store.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <ThemeProvider>
   <GlobalStyles />
   <BrowserRouter basename="/DriveRentHub">
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <App />
     </PersistGate>
    </Provider>
   </BrowserRouter>
  </ThemeProvider>
 </React.StrictMode>
);
