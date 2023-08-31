import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Calendary } from "./pages/Calendary";

export const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Switch>
        <Route index element={<Home />} />
        <Route path="/calendary" element={<Calendary />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)