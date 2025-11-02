import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<Index />} />
        <Route path="/lists.html" element={<Lists />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return (
    <>
      <h1>Login</h1>
      <div>
        <form method="POST" action="/create_account">
          <p>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" required />
          </p>
          <input type="submit" value="Create Account" name="submit" id="submit" />
        </form>
      </div>
    </>
  );
}

function Lists() {
  return (
    <>
      <h1>User Lists</h1>
      <div>
        <p>Select a list to make a bracket for:</p>
        <select name="user_lists" id="user_lists">
          <option value="standard_list">Select a List</option>
        </select>
      </div>
    </>
  );
}

function Not_Found() {
  return (
    <>
      <h1>Page Not Found :</h1>
      <div>
        <p>Did you meant to go to any of these pages?</p>
        <nav>
          <ul>
            <li>
              <Link to="/index.html">Login Page</Link>
            </li>
            <li>
              <Link to="/lists.html">List Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App