import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BotW from "./routes/BotW";

export const ListContext = createContext();

export const ModalContext = createContext();

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        scaleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <BotW />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
