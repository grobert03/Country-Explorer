import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
const Country = () => {
  let ccn = window.location.pathname.replace("/country/", "");
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [weather, setWeather] = useState({});

  const fetchData = async (ccn) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${ccn}`);
      const result = response.data[0];
      const lat = result.capitalInfo.latlng[0];
      const lon = result.capitalInfo.latlng[1];
  
      // Get weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API}`
      );
      const weatherData = weatherResponse.data;
      
      setWeather(weatherData);
      setCountry(result);
    } catch (err) {
      navigate("/");
    }
  };

  
  useEffect(() => {
    fetchData(ccn);
  }, [ccn]);

  if (Object.keys(country).length === 0 && Object.keys(weather).length === 0) {
    return (
      <div className="border rounded-lg w-3/4 m-auto bg-gray-700 border-gray-600 placeholder-gray-400 text-white flex justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="border rounded-lg w-3/4 lg:w-1/2 m-auto bg-gray-700 border-gray-600 placeholder-gray-400 text-white py-3 px-2 sm:px-6">
        <Link className="w-2 inline-block" to="/">
          <AiOutlineArrowLeft className="text-white font-bold mb-2"></AiOutlineArrowLeft>
        </Link>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <img
              className=" "
              src={country.flags.png}
              alt={country.flags.alt}
            />
            <p className="text-gray text-md font-light italic">
              Population:{" "}
              <span className="font-bold">{country.population}</span>
            </p>
            <p className="text-gray text-md font-light italic">
              Timezone:{" "}
              <span className="font-bold">{country.timezones[1] ? country.timezones[1] : country.timezones[0]}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray text-md font-light italic">
              Common name:{" "}
              <span className="font-bold">{country.name.common}</span>
            </p>
            <p className="text-gray text-md font-light italic">
              Official name:{" "}
              <span className="font-bold">{country.name.official}</span>
            </p>
            <p className="text-gray text-md font-light italic">
              Capital: <span className="font-bold">{country.capital[0]}</span>
            </p>
            <p className="text-gray text-md font-light italic">
              Current weather in {country.capital[0]}:{" "}
            </p>
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row ">
                <img className="w-2/3 md:w-1/3"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
                <div className="flex flex-col">
                  <p className="text-sm">{weather.weather[0].description}</p>
                  <p className="text-sm">{Math.round(weather.main.temp - 273.15)} °C</p>
                  <p className="text-sm">{weather.main.humidity} % Humidity</p>
                </div>
              </div>
              <div className="flex  items-center"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Country;
