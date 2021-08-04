import { BrowserRouter, Switch, Route, Redirect, useRouteMatch} from "react-router-dom"
import Signup from "./Pages/Auth/signup/signup"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth/signup">
           <Signup/>
          </Route>
          <Route path='/'>
            <ComingSoon/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
