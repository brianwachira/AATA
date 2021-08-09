import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import Notification from "./Components/Notification/Notification"
import { ALL_CLINICS, ALL_ISSUES, ME } from "./graphql/queries"
import Analytics from "./Pages/Analytics/Analytics"
import Login from "./Pages/Auth/login/login"
import Signup from "./Pages/Auth/signup/signup"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"
import Home from "./Pages/Home/Home"


function App() {

  const[isLoggedIn, setLoggedIn] = useState(false)
    
  useEffect(() => {
    const loggedIn = window.localStorage.getItem('token')
    console.log(loggedIn)
    if(loggedIn) {
      setLoggedIn(true)
    }
  }, [])
  const [errorMessage, setErrorMessage] = useState(null)
  const [title, setTitle] = useState(null)

  const clinicsResult = useQuery(ALL_CLINICS)
  const issuesResult = useQuery(ALL_ISSUES)
  const meResult = useQuery(ME)
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
          <Route exact path='/analytics'>
               {!isLoggedIn ?  <Redirect to="/auth/login" /> : 
            <Analytics
               allClinics={clinicsResult} 
               allIssues={issuesResult}
               meResult={meResult}/>}
          </Route>
          <Route exact path='/'>
               {!isLoggedIn ?  <Redirect to="/auth/login" /> : 
            <Home meResult={meResult}/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
