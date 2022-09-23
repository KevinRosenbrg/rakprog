import React, { useState } from "react"
import Box from "@mui/material/Box"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"
import { Button } from "@mui/material"

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <h2>Home</h2>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "25px",
          height: "100vh"
        }}
      >
        <Counter />
        {show && <Toggle />}
        <Button
          color="error"
          variant="contained"
          onClick={() => setShow(!show)}
        >
          Toggle toggle
        </Button>
      </Box>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Users() {
  return <h2>Users</h2>
}

export default App
