import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";

// ✅ Import your SVG icons from src/assets
import ClearDay from "./assets/clear-day.svg";
import ClearNight from "./assets/clear-night.svg";
import Cloudy from "./assets/cloudy.svg";
import Rain from "./assets/rain.svg";
import Drizzle from "./assets/drizzle.svg";
import Snow from "./assets/snow.svg";
import Fog from "./assets/fog.svg";
import UmbrellaWind from "./assets/umbrella-wind.svg";

// ✅ Map OpenWeather icon codes → imported SVGs
const iconMap = {
  "01d": ClearDay,
  "01n": ClearNight,
  "02d": Cloudy,
  "02n": Cloudy,
  "03d": Cloudy,
  "03n": Cloudy,
  "04d": Cloudy,
  "04n": Cloudy,
  "09d": Rain,
  "09n": Rain,
  "10d": Rain,
  "10n": Rain,
  "11d": Drizzle,
  "11n": Drizzle,
  "13d": Snow,
  "13n": Snow,
  "50d": Fog,
  "50n": Fog,
};

function App() {
  const [Condition, setCondition] = useState("");
  const [Search, setSearch] = useState("multan");
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("Multan");
  const [Country, setCountry] = useState("PK");
  const [windSpeed, setWindSpeed] = useState("");
  const [iconCode, setIconCode] = useState("");
  const [description, setDescription] = useState("");

  function searchData(e) {
    setSearch(e);
  }

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=2758331c28dad2ea25eef95df0ecb0d3&units=metric`
      );
      let data = await response.json();

      if (response.status === 404) {
        alert("Please enter a valid city name.");
      } else {
        setCondition(data.weather[0].main);
        setTemp(data.main.temp);
        setCity(data.name);
        setCountry(data.sys.country);
        setWindSpeed(data.wind.speed);
        setIconCode(data.weather[0].icon); // <- icon code like "01d"
        setDescription(data.weather[0].description);
      }
    };
    fetchData();
  }, [Search]);

  // ✅ Select custom icon or fallback to umbrella-wind.svg
  const customIcon = iconMap[iconCode] || UmbrellaWind;

  return (
    <>
      <Navbar />
      <SearchBar search={searchData} />
      <div className="mt-7 cond flex flex-col justify-center items-center">
        <div className="icon">
          <div className="rain mt-0 mb-0 p-0 text-9xl">
            <img className="h-52" src={customIcon} alt={description} />
          </div>
        </div>
        <div className="sorthal font-bold text-3xl font-sans mt-3.5 text-green-600">
          {Condition}
        </div>
      </div>

      <div className="main bg-gray-800 flex flex-col justify-center items-center mt-12 text-xl pl-3 pr-3">
        <div className="temp flex items-center justify-between min-w-80">
          <h3 className="text-white font-semibold p-[23px] pt-0">Temperature</h3>
          <p className="text-green-500 text-[17px] p-[23px] pt-0">{temp}°C</p>
        </div>
        <div className="temp flex items-center justify-between min-w-80">
          <h3 className="text-white font-semibold p-[23px] pt-0">Wind-Speed</h3>
          <p className="text-green-500 text-[17px] p-[23px] pt-0">
            {windSpeed} km/h
          </p>
        </div>
        <div className="cityname flex items-center justify-between min-w-80">
          <h3 className="text-white font-semibold p-[23px] pt-0">City</h3>
          <p className="text-green-500 text-[17px] p-[23px] pt-0">{city}</p>
        </div>
        <div className="codition flex items-center justify-between min-w-80">
          <h3 className="text-white font-semibold p-[23px] pt-0">Country</h3>
          <p className="text-green-500 text-[17px] p-[23px] pt-0">{Country}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
