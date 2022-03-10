import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            {/* <Routes path="/signup">
              <SignUp setUser={setUser} />
            </Routes>
            <Routes path="/login">
              <Login setUser={setUser} />
            </Routes> */}
            <Route path="/about">
              <About setUser={setUser} />
            </Route>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
