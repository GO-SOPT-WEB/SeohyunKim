import axios from "axios";
import { useEffect, useState } from "react";

const useGetWeatherInfo = (dayOrWeek, area) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  let WEATHER_URL;
  switch (dayOrWeek) {
    case "day":
      WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;
      break;
    case "week":
      WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;
      break;
    default:
      break;
  }

  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(WEATHER_URL);
      setIsLoading(false);
      setData(data);
    } catch (e) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [area]);

  return { isError, isLoading, data };
};

export default useGetWeatherInfo;
