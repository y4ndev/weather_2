import React from "react";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import "./styles/app.scss";

const App: React.FC = () => {
  const [data, setData] = React.useState([]);

  const weatherApi = () => {
    let key = "5d943b67217a5dc72905bd868ceb2e3b";
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=${key}`)
      .then((resp) => resp.json())
      .then((resp) => {
        getWeather(resp);
        console.log(resp);
      })
      .catch((err) => console.log("could not fetch" + err));
  };

  const getWeather = (weather: any) => {
    const { list } = weather;
    const newArray = list?.filter(({ list }: any) => {
      if (list.dt_txt.includes("15:00:00")) {
        return list;
      }
    });
    setData(newArray);
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <Header />
          <Search />
          <Weather data={data} />
          <button onClick={() => weatherApi()}>Получить</button>
        </div>
      </div>
    </>
  );
};

export default App;
