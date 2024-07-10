import HearIcon from "../../assets/heart.svg";
import HeartRedIcon from "../../assets/heart-red.svg";
import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

function ToggleFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const [isFavourite, ToggleFavourite] = useState(false);

  useEffect(() => {
    const found = favourites.find((fav) => fav.location == location);
    ToggleFavourite(found);
  }, [favourites,location]);

  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location == location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    }
    else{
      removeFromFavourites(location)
    }
    ToggleFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartRedIcon : HearIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ToggleFavourite;
