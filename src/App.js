import "./styles.css";
import React from "react";
import { AuthProvider } from "./context/auth/auth.context";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UIProvider } from "./context/ui/ui.context";
import Header from "./components/header/Header";
import Layout from "./layouts/app-layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Route exact path="/" component={Home} />
      </Layout>
    </BrowserRouter>
  );
}

export default function () {
  return (
    <AuthProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </AuthProvider>
  );
}
