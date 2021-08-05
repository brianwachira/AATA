import { BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./Pages/Auth/login/login"
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
          <Route path="/auth/login">
           <Login/>
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
