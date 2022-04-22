import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./site-settings/site-theme/defaults";
import { AuthProvider } from "./context/auth/auth.context";
import { UIProvider } from "./context/ui/ui.context";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./layouts/app-layout";

import Home from "./pages/Home";
import { LanguageProvider } from "./context/language/language.context";
import { messages } from "./site-settings/site-translation/messages";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </BrowserRouter>
  );
}

export default function () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider messages={messages}>
        <AuthProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
