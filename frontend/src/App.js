import { useState } from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Notification from "./Components/Notification/Notification"
import Analytics from "./Pages/Analytics/Analytics"
import Login from "./Pages/Auth/login/login"
import Signup from "./Pages/Auth/signup/signup"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"
import Home from "./Pages/Home/Home"


function App() {
  
  const [errorMessage, setErrorMessage] = useState(null)
  const [title, setTitle] = useState(null)
  return (
    <div>
      <BrowserRouter>
        <Notification message={errorMessage} title={title}/>
        <Switch>
          <Route path="/auth/signup">
           <Signup setTitle={setTitle} setMessage={setErrorMessage}/>
          </Route>
          <Route path="/auth/login">
           <Login setTitle={setTitle} setMessage={setErrorMessage}/>
          </Route>
          <Route path='/comingsoon'>
            <ComingSoon/>
          </Route>
          <Route path='/analytics'>
            <Analytics/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
