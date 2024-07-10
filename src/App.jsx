import WeatherProvider from "./provider/WeatherProvider";
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";
import Page from "./Page";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
      <FavouriteProvider>
        <Page/>
      </FavouriteProvider>
    </WeatherProvider>
    </LocationProvider>
    
  );
}

export default App;
