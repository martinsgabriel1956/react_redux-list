import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';

export function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>  
    </BrowserRouter>
  );
}