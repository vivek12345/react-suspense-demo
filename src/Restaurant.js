import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  const routeLink = `/${restaurant.id}`;
  return (
    <div className="fl w-50 w-25-m w-20-l pa2 ba b--black-10 br2 br--top m10">
      <Link to={routeLink} className="db link dim tc">
        <img
          src={restaurant.image_url}
          className="w-100 db outline black-10"
          alt="restaurant"
        />
        <dl className="mt2 f6 lh-copy">
          <dt className="ml0 black truncate w-100">{restaurant.name}</dt>
          <dd className="ml0 black truncate w-100">{restaurant.address}</dd>
          <dt className="ml0 black truncate w-100">{restaurant.city}</dt>
          <dd className="ml0 gray truncate w-100">{restaurant.price}</dd>
        </dl>
      </Link>
    </div>
  );
};

export default Restaurant;
