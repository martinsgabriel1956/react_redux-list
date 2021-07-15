import { Switch, Route } from "react-router-dom";

import { Navigation } from "./components/Nav/Navigation";
import { Products } from "./containers/Products";
import { Favorites } from "./containers/Favorites";



export function Routes() {
  return (
    <>
      <Navigation />
      <Switch>
        <main>
          <Route path="/" exact component={Products} />
          <Route path="/favorites" component={Favorites} />
        </main>
      </Switch>
    </>
  );
}
