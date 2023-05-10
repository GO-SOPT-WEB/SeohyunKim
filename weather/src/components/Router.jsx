import { BrowserRouter, Route, Routes } from "react-router-dom";

import WeatherForecast from "../pages/WeatherForecast";
import DayCardSection from "./DayCardSection";
import WeekCardSection from "./WeekCardSection";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherForecast />}>
          <Route path="day/:area" element={<DayCardSection />} />
          <Route path="week/:area" element={<WeekCardSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
