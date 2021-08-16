import { useQuery } from "@apollo/client"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useEffect, useState } from "react"
import Notification from "./Components/Notification/Notification"
import { ALL_CLINICS, ALL_ISSUES, ME } from "./graphql/queries"
import Analytics from "./Pages/Analytics/Analytics"
import Login from "./Pages/Auth/login/login"
import Signup from "./Pages/Auth/signup/signup"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"
import Home from "./Pages/Home/Home"
import PageNotFound from "./Pages/404/PageNotFound"


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = window.localStorage.getItem('token')
    if (loggedIn) {
      setLoggedIn(true)
    }
  }, [])
  const [errorMessage, setErrorMessage] = useState(null)
  const [title, setTitle] = useState(null)

  //get all clinics, issues and current user data
  const clinicsResult = useQuery(ALL_CLINICS)
  const issuesResult = useQuery(ALL_ISSUES)
  const meResult = useQuery(ME)

  // get clinics with issues
  const clinicWithIssues = issuesResult.data && (issuesResult.data['issues'].map(issue => issue.branch));
  
  //filter repeated clinics
  const uniqueClinics = clinicWithIssues && ([...new Set(clinicWithIssues.map(clinic => clinic))]);
  
  return (
    <>
      <BrowserRouter>
        <Notification message={errorMessage} title={title} />
        <Switch>
          <Route path="/auth/signup">
            <Signup setTitle={setTitle} setMessage={setErrorMessage} />
          </Route>
          <Route path="/auth/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login setTitle={setTitle} setMessage={setErrorMessage} />}
          </Route>
          <Route path='/comingsoon'>
            <ComingSoon />
          </Route>
          <Route exact path='/analytics'>
            {isLoggedIn === false && <Redirect to="/auth/login" /> }
              <Analytics
                allClinics={clinicsResult}
                allIssues={issuesResult}
                meResult={meResult}
                setTitle={setTitle} 
                setMessage={setErrorMessage}
                clinicWithIssues={uniqueClinics}  />

          </Route>
          <Route exact path='/'>
            {isLoggedIn === false ? <Redirect to="/auth/login" /> : <Home meResult={meResult} />}
          </Route>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
