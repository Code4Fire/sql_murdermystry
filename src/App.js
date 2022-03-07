import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
// import Login from "./Login";
// import SignUp from "./Signup";
import Home from "./Home";
import './App.css';
import About from "./About";

function App() {
  const [user,setUser] = useState(null);

  return (
    <div className="App">
      <Navbar
        user={user} setUser={setUser}
      />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/about">
              <About setUser={setUser} />
            </Route>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        )}
      </main>
    </div>
  );
}

export default App;
