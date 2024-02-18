import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css'

function App() {
  const password = nanoid();
  const [passworState, setPasswordState] = useState("");

  function generatePassword() {
    setPasswordState(password);
  }

  return (
    <div className='container_app_password_generator'>
      <h1>Gerador de senhas</h1>
      <button
        id='button_generate_password'
        type='button'
        onClick={generatePassword}
      >
        Gerar senha
      </button>
      <h1 id='password'>{passworState.length > 0 ? passworState : "..."}</h1>
    </div>
  )
}

export default App
