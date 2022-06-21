import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import {Dashboard} from "../../../pages/Dashboard";
import {SignIn} from "../../../pages/SignIn";
import {routeUrl} from "../../../utils/constants";

export type AppContextDataType = {
  token: string | null;
};

export const AppContext = React.createContext<AppContextDataType | null>(null);

const basepath: string = routeUrl === "" ? "/" : routeUrl;

const App = () => {
  return (
    <BrowserRouter basename={basepath}>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  );
};

export {App};
