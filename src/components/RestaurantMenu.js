import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, city } =
    resInfo?.cards[2]?.card?.card?.info;

  const { carousel } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(carousel);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h2>{costForTwoMessage}</h2>
      <h2>{city}</h2>
      <h2>Menu</h2>
      <ul>
        {carousel.map((item) => (
          <li key={item.dish.info.id}>
            {item.dish.info.name} -{" "}
            {item.dish.info.defaultPrice / 100 || item.dish.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
