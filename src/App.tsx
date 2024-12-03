import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const tg = window.Telegram?.WebApp

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await tg.sendData(JSON.stringify({text}))
    setText('')
    tg.close()
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Current time is {new Date().toTimeString()}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
          <button type="submit">Submit</button>
        </form>

      </div>
      <p className="read-the-docs">
        {JSON.stringify(tg)}
      </p>
    </>
  )
}

export default App
