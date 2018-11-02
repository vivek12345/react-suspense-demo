import React, { Suspense } from "react";
import Spinner from "react-svg-spinner";
import { createResource } from "./createResource";
import Image from "./Image";

const RestaurantDetailResource = createResource(restaurantId => {
  return new Promise((resolve, reject) => {
    fetch(`https://8kq2vljq58.sse.codesandbox.io/restaurants/${restaurantId}`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        throw new Error(error);
      });
  });
});

const RestaurantDetail = props => {
  const restaurantDetails = RestaurantDetailResource.read(
    props.match.params.restaurant_id
  );
  return (
    <article className="pa3 pa5-ns">
      <h1 className="f2">{restaurantDetails.name}</h1>
      <div className="container">
        <Suspense fallback={<Spinner />}>
          <img
            src="https://i.imgur.com/HPl8Sts.jpg"
            className="center f5 measure"
            alt="outer space"
          />
        </Suspense>
        <div className="pa4">
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th className="fw6 tl pa3 bg-white">Addres</th>
                  <th className="fw6 tl pa3 bg-white">City</th>
                  <th className="fw6 tl pa3 bg-white">State</th>
                  <th className="fw6 tl pa3 bg-white">Area</th>
                  <th className="fw6 tl pa3 bg-white">Postal Code</th>
                  <th className="fw6 tl pa3 bg-white">Country</th>
                  <th className="fw6 tl pa3 bg-white">Phone</th>
                  <th className="fw6 tl pa3 bg-white">Price</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                <tr className="stripe-dark">
                  <td className="pa3">{restaurantDetails.address}</td>
                  <td className="pa3">{restaurantDetails.city}</td>
                  <td className="pa3">{restaurantDetails.state}</td>
                  <td className="pa3">{restaurantDetails.area}</td>
                  <td className="pa3">{restaurantDetails.postal_code}</td>
                  <td className="pa3">{restaurantDetails.country}</td>
                  <td className="pa3">{restaurantDetails.phone}</td>
                  <td className="pa3">{restaurantDetails.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RestaurantDetail;
