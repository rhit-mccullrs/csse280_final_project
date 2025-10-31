import { useState } from 'react'
import './App.css'

function App() {
  // TODO: With your instructor

  //<> is a React Fragment that doesn't include extra DOM elements
  return (
    <> 
      <h1>Do you like chess?</h1>
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
  )
}

function RegistrationForm() {

}

export default App
