import { BrowserRouter, Route, Routes } from "react-router-dom";

import WeatherForecast from "../pages/WeatherForecast";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={WeatherForecast}>
          <Route path="day/:area" />
          <Route ptah="week/:area" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
