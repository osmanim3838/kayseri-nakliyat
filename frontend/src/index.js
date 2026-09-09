import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "@/index.css";
import App from "@/App";
import OfferPage from "@/components/site/OfferPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/teklif-al" element={<OfferPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>,
);