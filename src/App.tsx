import { useState } from 'react'
import cookieImage from '/fortune_cookie.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={cookieImage} className="logo" alt="Fortune Cookie" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Keep clicking to crack the fortune cookie
      </p>
    </>
  )
}

export default App
