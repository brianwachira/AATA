import { BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./Pages/Auth/login/login"
import Signup from "./Pages/Auth/signup/signup"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"
import Home from "./Pages/Home/Home"


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
            {/* <ComingSoon/> */}
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
