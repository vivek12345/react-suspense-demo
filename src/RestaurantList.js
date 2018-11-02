import React from "react";
import Restaurant from "./Restaurant";
import { createResource } from "./createResource";

const restaurantListResource = createResource(() => {
  return new Promise((resolve, reject) => {
    fetch("https://8kq2vljq58.sse.codesandbox.io/restaurants")
      .then(res => res.json())
      .then(response => {
        const { restaurants } = response;
        resolve(restaurants);
      });
  });
});

function renderRestaurants(restaurants) {
  return restaurants.map(restaurant => {
    return <Restaurant restaurant={restaurant} key={restaurant.id} />;
  });
}

const RestaurantList = () => {
  const restaurants = restaurantListResource.read();
  return (
    <article>
      <h2 className="f3 fw4 pa3 mv0">Restaurant List</h2>
      <div className="cf pa2">{renderRestaurants(restaurants)}</div>
    </article>
  );
};

export default RestaurantList;
