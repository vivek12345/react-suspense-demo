import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Spinner from "react-svg-spinner";
import { createResource } from "./createResource";

import "./styles.css";
import "./cards.css";
import "./table.css";

const RestaurantListResource = createResource(() => import("./RestaurantList"));
const RestaurantDetailResource = createResource(() =>
  import("./RestaurantDetail")
);

const RestaurantListLoader = props => {
  const RestaurantList = RestaurantListResource.read().default;
  return <RestaurantList {...props} />;
};

const RestaurantDetailLoader = props => {
  const RestaurantDetail = RestaurantDetailResource.read().default;
  return <RestaurantDetail {...props} />;
};

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={RestaurantListLoader} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/:restaurant_id" component={RestaurantDetailLoader} />
        </Suspense>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
