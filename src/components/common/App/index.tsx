import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import {Dashboard} from "../../../pages/Dashboard";
import {SignIn} from "../../../pages/SignIn";

export type AppContextDataType = {
  token: string | null;
};

export const AppContext = React.createContext<AppContextDataType | null>(null);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
      </Routes>
    </Router>
  );
};

export {App};
